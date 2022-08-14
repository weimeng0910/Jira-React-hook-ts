
import path from 'path'
import { Configuration, } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
//识别特定类别的 webpack 错误并清理
import friendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import Dotenv from 'dotenv-webpack';


//定义函数保存base
export const CommonConfig = (mode: "development" | "production"): Configuration => {

  const isProduction: boolean = process.env.NODE_ENV === 'development';
  const devEnv = path.resolve(__dirname, '../.env.development');
  const prodEnv = path.resolve(__dirname, '../.env.production');

  return {
    target: 'web',//防止和.browserslistrc文件配制冲突
    mode,
    // 入口文件
    entry: path.resolve(__dirname, '../src/index.tsx'),
    optimization: {
      usedExports: true
    },
    // 输出
    output: {
      // 文件名称
      filename: 'js/[name].[contenthash:8].js',
      // 输出目录
      path: path.resolve(__dirname, '../dist'),
      // 打包前清空输出目录
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true
              }
            }
          ]
        },

        {
          test: /\.(ts|tsx?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options:
              {
                compilerOptions:
                  { noEmit: false }
              }
            }
          ]
        },
        //解决使用css modules时antd样式不生效
        {
          test: /\.css$/,
          // 采用css modules的解析方式时，排除对node_modules文件处理
          exclude: [/src/], // antd(node_modules文件)目录
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.css$/,
          // 采用css modules的解析方式时，排除对node_modules文件处理
          exclude: [/node_modules/],
          use: [
            {
              loader: isProduction ? 'style-loader' : MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  mode: 'local',
                  //auto: (resourcePath: string) => resourcePath.endsWith('.less'),  // 匹配.less文件来进行css模块化。
                  localIdentName: '[name]__[local]--[hash:base64:10]',
                }
              },
            },

            {
              loader: 'postcss-loader'
            }
          ]
        },
        {
          test: /\.s[ca]ss$/,
          use: [
            {
              loader: isProduction ? 'style-loader' : MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        },

        {
          test: /\.less$/,
          use: [
            { loader: isProduction ? 'style-loader' : MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: {
                  localIdentName: '[name]__[local]--[hash:base64:10]',
                }
              },
            },
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true
                }
              }
            }
          ]
        },

        {
          test: /\.styl$/,
          use: [
            {
              loader: isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
              options: {
                modules: true
              }
            },
            {
              loader: 'stylus-loader'
            }
          ]
        },
        // 图片文件引入
        {
          test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'img/[hash][ext][query]'
          },
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024 // 限制于 8kb
            }
          },
          // 只解析src目录
          include: path.resolve(__dirname, './src')
        },
        {
          test: /\.txt/,
          type: 'asset/source'
        }
      ]
    },
    performance: {
      hints: false
    },
    resolve: {
      // 定义了扩展名之后，在import文件时就可以不用写后缀名了，会按循序依次查找
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.less'],
      // 设置链接
      alias: {
        // 注意resolve方法开始的查找的路径是/
        '@': path.resolve(__dirname, '../src')
      }
    },
    plugins: [
      new Dotenv({
        path:
          isProduction
            ? prodEnv
            : devEnv,
        systemvars: true, // 允許讀取 process.env 下的任意系統變量
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css' // 设置文件存放的位置和名称
      }),
      new HtmlWebpackPlugin({
        title: 'Jira System',
        // HTML模板文件
        template: path.resolve(__dirname, '../public/index.html'),
        filename: 'index.html',
        // 收藏夹图标
        favicon: path.resolve(__dirname, '../public/logo.ico'),
        hash: true,
        cache: false,
        inject: true,
        minify: {
          removeComments: true,
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          minifyJS: true, // 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
          minifyCSS: true // 缩小CSS样式元素和样式属性
        },
        nodeModules: path.resolve(__dirname, '../node_modules')
      }),

      new friendlyErrorsWebpackPlugin()
    ]
  }
};

