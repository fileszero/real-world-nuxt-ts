import { NuxtAxiosInstance } from '@nuxtjs/axios'

// https://typescript.nuxtjs.org/ja/guide/setup.html#%E8%A8%AD%E5%AE%9A
// http://tech.innovation.co.jp/2019/01/25/Nuxt-Typescript.html

declare module '*.vue' {
  const _default: Vue
  export default _default
}
// https://qiita.com/hareku/items/b3e7c5427d0f4cb822a7
export interface Context {
  // ...
  $axios: NuxtAxiosInstance
}
