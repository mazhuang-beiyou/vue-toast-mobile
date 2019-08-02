#vue-toast
a toast plugin for vue
#how to use

npm install vue-toast-lzy

import VueToast from 'vue-toast-lzy'

Vue.use(VueToast)

#in Vue components

this.$toast.show("hello")

#default by 3s

#more, for 5s duration

this.$toast.error("hello",{duration:5000})

this.$toast.success(hello,{duration:2000})
