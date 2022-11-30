module.exports = {
  env: {
    browser: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest-dom/recommended",
  ],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "lodash",
            message: "Please use lodash/{module} instead",
          },
          {
            name: "lodash/fp",
            message: "Please use lodash/fp/{module} instead",
          },
          {
            name: "react-i18next",
            message: "Please use hooks/useCustomTranslation instead",
          },
        ],
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
    "jest-dom",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "jest-dom/prefer-checked": "error",
    "jest-dom/prefer-enabled-disabled": "error",
    "jest-dom/prefer-required": "error",
    "jest-dom/prefer-to-have-attribute": "error",
    "no-use-before-define": "off",
    "import/no-named-as-default": "off",
    "consistent-return": "off",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "no-nested-ternary": "warn",
    "react/jsx-filename-extension": "off",
    "jsx-a11y/media-has-caption": "warn",
    "import/extensions": "warn",
    "import/no-cycle": "off",
  },
};
