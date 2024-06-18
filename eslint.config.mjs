import globals from "globals";
import pluginJs from "@eslint/js";

import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});


export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,

  ...compat.extends("eslint-config-airbnb-base"),

  {
    rules: {
      'import/extensions': 'off',
      'import/prefer-default-export': 'off'
    }
  },
  {
    ignores: ['eslint.config.mjs']
  }
];