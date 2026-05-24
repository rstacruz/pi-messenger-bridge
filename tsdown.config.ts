import { defineConfig } from "tsdown";

export default defineConfig({
  format: ["esm"],
  platform: "node",
  shims: true,
  deps: {
    alwaysBundle: [/./],
    neverBundle: [
      "@earendil-works/pi-ai",
      "@earendil-works/pi-coding-agent",
      "@earendil-works/pi-tui",
      "qrcode-terminal",
      "@matrix-org/matrix-sdk-crypto-nodejs",
    ],
  },
  dts: true,
  sourcemap: true,
  outExtensions() {
    return { js: ".js" };
  },
  outputOptions: {
    codeSplitting: false,
  },
});
