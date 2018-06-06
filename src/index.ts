export interface ExternalsObjectElement {
  [key: string]: boolean | string;
}

export interface DevServer {
  port?: number; // 运行端口号
  // 代理到后端服务接口
  proxy?: {
    [key: string]: string;
  };
}

export interface Output {
  publicPath?: string; // 资源URL前缀
}

export interface Module {
  noParse?: RegExp | RegExp[] | ((content: string) => boolean); // 忽略对部分没有模块化的文件的解析
}

export interface BuildertoolsConfig {
  mode?: "development" | "production";
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
  entry?: string | string[] | { [name: string]: string | string[] };

  output?: Output;

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
  devServer?: DevServer;
}
