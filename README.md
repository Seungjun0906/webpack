# webpack

## Asset Management

- 자바스크립트 모듈 내에서 css파일을 import 하려면 style-loader와 css-loader를 설치하고 module 설정에 추가해야 합니다.

```
npm i --save-dev style-loader css-loader
```

- webpack.config에 module 항목 추가
- style-loader가 먼저 오고 그 뒤에 css-loader 유지

- module.rules: 파일 유형별로 어떻게 처리할지 로더 규칙을 설정하는 곳입니다.
- test: /\.css$/i: 파일 확장자가 .css인 것(대소문자 무시)을 이 규칙의 대상으로 매칭합니다.
- use: ["style-loader", "css-loader"]:
- 로더는 오른쪽에서 왼쪽(뒤에서 앞으로) 순서로 실행됩니다.
- css-loader: CSS를 import할 수 있게 JS 모듈로 변환합니다.
- style-loader: 변환된 CSS를 <style> 태그로 DOM에 주입해 브라우저에 적용합니다.

```
module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
```
