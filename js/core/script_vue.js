Vue.component("navbar", {
    template: nav
});

Vue.component("footer-bar", {
    template: footer
});

Vue.component("home", {
    template: home
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})