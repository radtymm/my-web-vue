import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import Test from './modules/Test'



Vue.use(Vuex)

const Store = new Vuex.Store({
    modules: {
        Test
    },
    getters
})

export default Store
