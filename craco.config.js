const CracoLessPlugin = require("craco-less");
const { colors, spacer, heights } = require("./src/settings/style");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // -------- Colors -----------
              "@primary-color": colors.accent,
              "@info-color": colors.accent,
              // "@success-color": green-6;
              "@processing-color": colors.primary,
              "@error-color": colors.errorColor,
              "@highlight-color": colors.accent,
              "@warning-color": colors.errorColor,
              "@normal-color": colors.gray100,
              white: colors.white,
              black: colors.black,

              // vertical paddings
              //   "@padding-lg": spacer.xl,
              //   "@padding-md": spacer.lg,
              //   "@padding-sm": spacer.md,
              //   "@padding-xs": spacer.sm,
              //   "@padding-xss": spacer.xs,

              // vertical margins
              //   "@margin-lg": spacer.xl,
              //   "@margin-md": spacer.lg,
              //   "@margin-sm": spacer.md,
              //   "@margin-xs": spacer.sm,
              //   "@margin-xss": spacer.xs,

              // height rules
              //   "@height-base": heights.md,
              //   "@height-lg": heights.lg,
              //   "@height-sm": heights.sm,

              //   input
              //   "@input-bg": colors.primary300,
              //   "@input-padding-vertical-base": spacer.sm,
              //   "@input-padding-vertical-sm": spacer.xs,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
