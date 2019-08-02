import ToastComponent from './lib/vue-toaste.vue'

let Toast = {}

Toast.install = (message, options) => {
    let opt = {
        duration: 3000,
    }
    for (let key in options) {
        opt[key] = options[key]
    }
    Vue.prototype.$toast = (message, option) => {
        console.log(message);
        if (typeof option == 'object') {
            for (let key in option) {
                opt[key] = option[key]
            }
        }
        let ToastController = Vue.extend(ToastComponent);
        let instance = new ToastController().$mount(document.createElement('div'))
        document.body.appendChild(instance.$el);
        instance.message = message;
        instance.visible = true
        instance.status = opt.status

        setTimeout(() => {
            instance.visible = false;
            document.body.removeChild(instance.$el);
        }, opt.duration);
    }
    Vue.prototype.$toast['show'] = (message, option) => {
        Vue.prototype.$toast(message, option)
    }
    Vue.prototype.$toast['success'] = (message, option) => {
        opt.status = "success"
        Vue.prototype.$toast(message, option)
    }
    Vue.prototype.$toast['error'] = (message, option) => {
        opt.status = "error"
        Vue.prototype.$toast(message, option)
    }

}

export default Toast