import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Add the log statement inside the function block
  console.log(`Vite is running in ${mode} mode`);

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
    base: mode === "production" ? "/thai-abc-adventure/" : "/",
    // resolve: {
    //   alias: {
    //     "@": path.resolve(__dirname, "./src"),
    //   },
    // },
  };
});
