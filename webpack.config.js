const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './js/main.js', // 파일 진입점
  output: { // 결과물 반환 설정
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader', // 스타일 태그로 삽입
          'css-loader', // css 해석
          'postcss-loader', // 공급업체 접두사 추가
          'sass-loader' // loader는 아래에서부터 읽음, 선언 순서 중요!
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 제외할 경로
        use: [
          'babel-loader' // es6 이상 구분 해석
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' } // 정적 파일을 모아둘 폴더
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}
