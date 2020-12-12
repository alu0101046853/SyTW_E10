module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    "standard"
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    indent: ["error", 2],
    semi: ["error", "always"],
    "spaced-comment": ["error", "always"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "dot-notation": "off",
    "eol-last": ["error", "never"]
  }
};