const PostCSSImport = require('postcss-import');
const PostCSSCustomProperties = require('postcss-custom-properties');
const PostCSShexrgba = require('postcss-hexrgba');

const classNameFormat = '[local]';

// NOTE: If using this in an environment, a more unique name
// format like '[name]_[local]_[hash:base64:5]' is appropriate

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          `css-loader?modules&importLoaders=1&localIdentName=${classNameFormat}`,
          'postcss-loader',
        ],
      },
    ],
  },
  postcss: [
    PostCSSImport,
    PostCSSCustomProperties,
    PostCSShexrgba,
  ],
};
