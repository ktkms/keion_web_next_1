import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  // Legacy effects are preserved until dedicated component regression tests.
  { rules: {
    "react-hooks/set-state-in-effect": "off",
    "react-hooks/preserve-manual-memoization": "off",
  } },
  { files: ["tests/**/*.cjs"], rules: { "@typescript-eslint/no-require-imports": "off" } },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
