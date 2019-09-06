module.exports = {
  title: "前端文档",
  description: "Just playing around",
  port: "9876",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "vue-cli3", link: "/vue-cli/" },
      { text: "VuePress", link: "https://vuepress.vuejs.org/zh/" }
    ],
    sidebar: {
      "/foo/": ["", ["one", "201709"], "two", ["two", "201709"]],
        "/vue-cli/": [["", "从头开始vue-cli配置"]],
      "/": [
        ["", "首页"]
      ]
    }
  }
};
