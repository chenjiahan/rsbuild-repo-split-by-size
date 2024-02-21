import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  output: {
    distPath: {
      root: "./rsbuild-dist",
    },
  },
  tools: {
    rspack: {
      optimization: {
        splitChunks: {
          chunks: "all",
          minSize: 10 * 1000,
          maxSize: 1024 * 1024 * 2,
        },
      },
    },
  },
});
