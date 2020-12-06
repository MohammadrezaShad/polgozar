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