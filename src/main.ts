import '@/assets/ress.css'
import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from '@/router'
import App from '@/App.vue'

// Material Design Icons
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

// Web Fonts
import '@fontsource-variable/noto-sans-jp'

const app = createApp(App).use(mdiVue, {
  icons: mdijs,
})

router.beforeEach((to, from, next) => {
  // ページのメタ情報からタイトルを取得
  const title = (to.meta.title as string) || 'デフォルトのタイトル'
  document.title = title // タイトルを変更
  next()
})

app.use(createPinia())
app.use(router)

app.mount('#app')
