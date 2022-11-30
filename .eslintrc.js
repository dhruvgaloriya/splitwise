module.exports = {
  extends: "react-app",
  rules: {
    quotes: ["warn", "single"],
    "no-console": "warn",
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
  },
};
