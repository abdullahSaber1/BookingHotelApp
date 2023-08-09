module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "eslint-config-prettier",

    // Must be the last item
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "unused-imports",
    "react-native",
    "react-hooks",
    "prettier",
  ],

  rules: {
    "no-unused-vars": "off",
    "react/jsx-filename-extension": [1, {extensions: [".js", ".jsx"]}],

    "prettier/prettier": ["warn", {endOfLine: "auto", singleQuote: false}],
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "unused-imports/no-unused-imports": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-console": "warn",
    "no-debugger": "warn",
    "comma-dangle": "off",
    semi: "off",
    indent: "off",
    "space-before-function-paren": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-use-before-define": ["error", {variables: false}],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "import/prefer-default-export": "off",
    "react-native/no-unused-styles": "warn",
    "import/no-extraneous-dependencies": "off",
    "react/prop-types": 0,
    "react/jsx-no-bind": 0,
  },
};
