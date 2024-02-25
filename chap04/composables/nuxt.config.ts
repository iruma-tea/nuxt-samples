// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      weatherInfoUrl: "https://api.openweathermap.org/data/2.5/weather",
      // APIキーの設定。ここに各自の文字列を記述する!!
      weathermapAppid: "xxxxxx",
    }
  }
})
