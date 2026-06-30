import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    typecheck: {
      // El type-check sólo corre con el flag --typecheck (lo lleva `npm test`).
      // `include` es necesario porque por defecto Vitest sólo type-checkea
      // *.test-d.ts; acá las aserciones de tipos (expectTypeOf) viven en los
      // mismos *.test.ts que los tests de comportamiento.
      include: ["**/*.test.ts"],
    },
  },
});
