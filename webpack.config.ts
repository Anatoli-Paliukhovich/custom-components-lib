import path from 'path';
import webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

type Mode = 'production' | 'development';
type EnvVariable = {
  mode: Mode;
};

export default (env: EnvVariable) => {
  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      libraryTarget: 'umd',
      clean: true,
    },

    plugins: [new ForkTsCheckerWebpackPlugin()],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
          exclude: [
            /node_modules/,
            path.resolve(__dirname, 'webpack.config.ts'),
          ],
        },
      ],
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    externals: {
      react: 'react',
    },
  };

  return config;
};
