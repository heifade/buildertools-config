interface ExternalsObjectElement {
  [key: string]: boolean | string;
}

interface DevServer {
  port?: number; // 运行端口号
  // 代理到后端服务接口
  proxy?: {
    [key: string]: string;
  };
}

interface Output {
  publicPath?: string; // 资源URL前缀
}

interface Module {
  noParse?: RegExp | RegExp[] | ((content: string) => boolean); // 忽略对部分没有模块化的文件的解析
}

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

  output?: Output = {
    publicPath: "" // 资源URL前缀
  };

  module?: Module; // 忽略对部分没有模块化的文件的解析
  /*
    1、"jQuery" // jQuery不打包到Chunk，可以通过 require("jQuery") 导入
    2、["jQuery", "lodash"]
    3、{
      jquery: "jQuery", // 全局变量jQuery,可以通过 require("jquery") 导入
      lodash: "lodash"
    }
    4、[{
      jquery: "jQuery",
      lodash: "lodash"
    }]
  */
  externals?: string | string[] | ExternalsObjectElement | ExternalsObjectElement[]; // 不打包到Chunk的库

  // 服务器
  devServer?: DevServer = {
    port: 8080, // 运行端口号
    proxy: {} //代理到后端服务接口
  };
}
