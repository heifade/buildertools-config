export class BuildertoolsConfig {
  mode?: "development" | "production" = "production";
  /*
    entry: "./src/index.js",
    entry: {
      index: "./src/index.js"
    },
    entry: {
      index: [
        "./src/index.js",
        "./src/main.js"
      ]
    }
  */
  entry?: string | { [name: string]: string | string[] } = { index: "./src/index" };
  port?: number = 8080;
}
