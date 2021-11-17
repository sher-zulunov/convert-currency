import Vue from 'vue'
import Router from 'vue-router'
import Convert from '../components/Convert.vue'
import Chart from '../components/Chart.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '',
            component: Convert

        },
        {
            path: '/chart',
            name: 'Chart',
            component: Chart

        }
    ]
})

