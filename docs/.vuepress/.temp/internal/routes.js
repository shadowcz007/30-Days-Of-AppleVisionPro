export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/38957/Documents/GitHub/30-Days-Of-AppleVisionPro/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"VisionPro"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/38957/Documents/GitHub/30-Days-Of-AppleVisionPro/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"关于"} }],
  ["/video/2.html", { loader: () => import(/* webpackChunkName: "2.html" */"C:/Users/38957/Documents/GitHub/30-Days-Of-AppleVisionPro/docs/.vuepress/.temp/pages/video/2.html.js"), meta: {"title":"22"} }],
  ["/video/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/38957/Documents/GitHub/30-Days-Of-AppleVisionPro/docs/.vuepress/.temp/pages/video/index.html.js"), meta: {"title":"Using Apple Vision Pro: What It’s Actually Like!"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/38957/Documents/GitHub/30-Days-Of-AppleVisionPro/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
