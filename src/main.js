import Vue from 'vue'
import App from './App.vue'
import smoothScroll from 'vue-smoothscroll'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faPenAlt, faUniversity, faTag, faKey} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserCircle, faPenAlt, faUniversity, faTag, faKey, faGithub, faFacebook)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(smoothScroll)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
