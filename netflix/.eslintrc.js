// .eslintrc.js
module.exports = {
  extends: [
    "eslint:recommended",
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended', // 타입스크립트 관련 규칙 추가
    'plugin:prettier/recommended', // Prettier와 ESLint를 함께 사용하도록 설정
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    // 여기에 원하는 추가 규칙을 설정하귀,,,
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
