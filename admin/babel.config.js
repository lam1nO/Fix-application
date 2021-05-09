module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    ["module-resolver", {
        root: ["./"],
        alias: {
            "@config": "./src/config",
            "@routes": "./src/routes",
            "@controllers": "./src/controllers",
            "@models": "./src/models",
            "@base": "./src/components/BaseComponents/"
        }
    }]
  ]
};
