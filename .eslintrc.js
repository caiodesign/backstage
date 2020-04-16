module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "semi": ["error", "never"],
    "import/first": 0,
    "import/no-extraneous-dependencies": 0,
    "react/default-props-match-prop-types": 0,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "no-confusing-arrow": 0,
    "no-restricted-globals": 0,
    "react/require-default-props": 0,
    "no-return-assign": 0,
    "object-curly-newline": 0,
    "react/forbid-prop-types": 0,
    "import/no-named-as-default-member": "off",
    "max-len": ["error", { "code": 80, "tabWidth": 4 }],
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "return" }
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
  },
};
