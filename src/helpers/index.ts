import loadImage from 'blueimp-load-image';

export interface ResizeImageResult {
  blob: Blob | null;
  url: string;
}

export function resizeImg(
  file: Blob,
  _width = 1200,
  _height = 800,
  crop = true,
  validate = false,
  // returnValidationBoolean = false,
): Promise<ResizeImageResult> {
  let width = _width;
  let height = _height;

  if (file) {
    return new Promise(function (resolve, reject) {
      loadImage.parseMetaData(file, function (data: any) {
        // default image orientation
        let orientation = 0;
        // if exif data available, update orientation
        if (data.exif) {
          orientation = data.exif.get('Orientation');
        }
        const isRotated = orientation > 4 && orientation < 9;
        if (isRotated) {
          const newHeight = height;
          height = width;
          width = newHeight;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          const img = document.createElement('img');
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

            let imgWidth = img.width;
            let imgHeight = img.height;
            let rImgWidth = img.width;
            let rImgHeight = img.height;
            let x = 0;
            let y = 0;
            // used for if we just want to check the size:
            // if (returnValidationBoolean) {
            //   if (imgWidth < width || imgHeight < height) {
            //     console.log('Image too small');
            //     return reject(new Error('Image too small'));
            //   }
            //   console.log('Image valid');
            //   // return resolve(true);
            // }
            if (validate && (imgWidth < width || imgHeight < height)) {
              reject(new Error('size_validation_error'));
            }
            if (crop) {
              rImgHeight = (height / width) * rImgWidth;
              if (rImgHeight > imgHeight) {
                rImgHeight = imgHeight;
                rImgWidth = (width / height) * imgHeight;
              }
              x = Math.max(0, (imgWidth - rImgWidth) / 2);
              y = Math.max(0, (imgHeight - rImgHeight) / 2);
              imgWidth = width;
              imgHeight = height;
            } else if (imgWidth > imgHeight) {
              if (imgWidth > width) {
                imgHeight *= width / imgWidth;
                imgWidth = width;
              }
            } else if (imgHeight > height) {
              imgWidth *= height / imgHeight;
              imgHeight = height;
            }
            if (isRotated) {
              canvas.width = imgHeight;
              canvas.height = imgWidth;
            } else {
              canvas.width = imgWidth;
              canvas.height = imgHeight;
            }
            // transform context before drawing image
            switch (orientation) {
              case 2:
                ctx.transform(-1, 0, 0, 1, imgWidth, 0);
                break;
              case 3:
                ctx.transform(-1, 0, 0, -1, imgWidth, imgHeight);
                break;
              case 4:
                ctx.transform(1, 0, 0, -1, 0, imgHeight);
                break;
              case 5:
                ctx.transform(0, 1, 1, 0, 0, 0);
                break;
              case 6:
                ctx.transform(0, 1, -1, 0, imgHeight, 0);
                break;
              case 7:
                ctx.transform(0, -1, -1, 0, imgHeight, imgWidth);
                break;
              case 8:
                ctx.transform(0, -1, 1, 0, 0, imgWidth);
                break;
              default:
                break;
            }

            ctx.drawImage(img, x, y, rImgWidth, rImgHeight, 0, 0, imgWidth, imgHeight);
            const dataurl = canvas.toDataURL('image/jpeg');
            canvas.toBlob(
              (blob) => {
                resolve({ blob, url: dataurl });
              },
              'image/jpeg',
              0.85,
            );
          };
          img.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
      });
    });
  }
  return Promise.reject(new Error('file do not found!'));
}

export function isObject(value: any) {
  return value && typeof value === 'object' && value.constructor === Object;
}

export const loadMapApi = () => {
  const mapsURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places&language=no&region=NO&v=quarterly`;
  const scripts = document.getElementsByTagName('script');
  // Go through existing script tags, and return google maps api tag when found.
  for (let i = 0; i < scripts.length; i += 1) {
    if (scripts[i].src.indexOf('https://maps.googleapis.com/maps/api') === 0) {
      return scripts[i];
    }
  }

  const googleMapScript = document.createElement('script');
  googleMapScript.src = mapsURL;
  googleMapScript.async = true;
  googleMapScript.defer = true;
  window.document.body.appendChild(googleMapScript);

  return googleMapScript;
};

const addressAttr = {
  locality: ['long_name', 'city'] as const,
  postal_code: ['long_name', 'zip'] as const,
  country: ['long_name', 'country'] as const,
};

type AddressAttr = keyof typeof addressAttr;
export interface ParseGoogleAddressResult {
  city?: string;
  zip?: string;
  country?: string;
  address: string;
  lat: number;
  lng: number;
}

export function parseGoogleAddress(address: google.maps.places.PlaceResult) {
  if (!address) {
    return {};
  }
  const addressResult = {
    lat: address?.geometry?.location.lat(),
    lng: address?.geometry?.location.lng(),
    address: address?.formatted_address,
  } as ParseGoogleAddressResult;
  const addressComponent = address?.address_components || [];
  for (let i = 0; i < addressComponent.length; i += 1) {
    const attr = addressComponent[i];
    const attrKey = attr.types[0] as AddressAttr;
    if (addressAttr[attrKey]) {
      addressResult[addressAttr[attrKey][1]] = attr[addressAttr[attrKey][0]];
    }
  }
  return addressResult;
}
