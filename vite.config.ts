import { defineConfig } from "vite";
import { checker } from "vite-plugin-checker";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      name: "Slugify",
      entry: "./lib/index.ts",
      formats: ["es", "umd", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      output: {
        exports: "named",
        globals: {
          "slugify": "slugify",
          "@cicara/tiny-pinyin": "TinyPinyin",
        },
      },
      external: ["@cicara/tiny-pinyin", "slugify"],
    },
  },
  server: {
    host: "127.0.0.1",
  },
  plugins: [dts({ tsconfigPath: "./tsconfig.lib.json" }), checker({ typescript: true })],
});
