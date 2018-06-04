export class BuildertoolsConfig {
  mode?: "development" | "production" = "production";
  entry? : {
    [name: string]: string | string[]
  }

}



let p: BuildertoolsConfig = {
  mode: "production",
  entry: {
    index: ''
  }
}