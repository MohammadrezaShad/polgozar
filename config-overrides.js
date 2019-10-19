// const theme = require('./src/settings/theme');
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // '@primary-color': theme.palette.primary,
      // '@link-color': theme.palette.lightBlue, // link color
      // '@heading-color': theme.palette.secondary, // heading text color
      // '@text-color': theme.palette.secondary, // major text color
      // '@text-color-secondary': 'rgba(0, 0, 0, .45)', // secondary text color
      // '@disabled-color': 'rgba(0, 0, 0, .25)', // disable state color
      // '@border-radius-base': '4px', // major border radius
      // '@border-color-base': theme.palette.lightGray, // major border color
      // '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)', // major shadow for layers
      // '@btn-primary-color': '#fff',
      // '@btn-primary-bg': theme.palette.secondary,
      // '@input-hover-border-color': theme.palette.secondary,
      // '@font-family': theme.fonts.primary,
      // '@error-color': theme.palette.primary,
      // '@font-size-base': '18px',
      // '@btn-font-weight': '300',
      // '@rate-star-color': theme.palette.secondary,
      '@rate-star-bg': '#ddd'
    }
  })
);
