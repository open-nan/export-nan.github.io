import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

type aaa = `/${string}/`

export default defineUserConfig({
  base: "/",

  title: 'NAN 的个人博客',

  locales: {
    "/": {
      lang: "zh-CN",
      title: "NAN 的个人博客",
    },
  },

  theme,

  shouldPrefetch: false,
});
