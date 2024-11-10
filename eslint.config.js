import js from '@eslint/js';
import im from 'eslint-plugin-import';
import ally from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';

export default [
  {
    plugins: {
      im,
      ally,
      react,
    },
    files: ['**.*.js'],
    rules: js.configs.recommended.rules,
  },
];

// {
//   "extends": ["prettier"],
//   "plugins": ["html", "prettier"],
//   "parser": "@babel/eslint-parser",
//   "parserOptions": {
//     "requireConfigFile": false,
//     "ecmaVersion": 6
//   },
//   "env": {
//     "browser": true,
//     "node": true,
//     "jquery": true,
//     "es6": true
//   },
//   "rules": {
//     "prettier/prettier": [
//       "error",
//       {
//         "trailingComma": "all",
//         "singleQuote": true
//       }
//     ],
//     "no-console": "off",
//     "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }]
//   }
// }
