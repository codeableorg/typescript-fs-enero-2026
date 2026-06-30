import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Type assertions (expectTypeOf) live in the same *.test.ts as the
    // behavior tests, so typecheck must scan those files too — by default
    // Vitest only type-checks *.test-d.ts.
    typecheck: {
      enabled: true,
      include: ["**/*.test.ts"],
    },
  },
});
