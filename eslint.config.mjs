// eslint.config.mjs
export default [
  {
    // Specify the files to lint
    files: [
      "**/*.ts",  // Lint all TypeScript files
      "**/*.cts", // Optional: Lint files with .cts extension
      "**/*.mts", // Optional: Lint files with .mts extension
      "**/*.js",  // Optional: Include JavaScript files if needed
    ],
    // Specify the parser and rules here
    parser: "@typescript-eslint/parser", // Specify the ESLint parser
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off"
    },
  },
  {
    // Specify files to ignore globally
    ignores: [
      "node_modules/", // Default ignore for node_modules
      ".git/",         // Default ignore for git directory
      "dist/",         // Optional: Ignore any output directory like dist
      ".config/*",     // Example: Ignore files in .config directory
    ]
  }
];
