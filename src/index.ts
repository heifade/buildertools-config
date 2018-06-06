export class BuildertoolsConfig {
  mode?: "development" | "production" = "production";
  /*
    1、entry: "./src/index.js",
    2、entry: [
      "./src/index.js",
      "./src/main.js"
    ]
    3、entry: {
      index: "./src/index.js"
    },
    4、entry: {
      index: [
        "./src/index.js",
        "./src/main.js"
      ]
    }
  */
  entry?: string | string[] | { [name: string]: string | string[] } = { index: "./src/index" };
  port?: number = 8080; // 运行端口号
  noParse?: RegExp | RegExp[] | ((content: string) => boolean); // 忽略对部分没有模块化的文件的解析
}
