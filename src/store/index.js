import { createStore } from 'vuex'
import repository from '@/api/repository'
export default createStore({
    state() {
      return {
        productos: [],
        catalogo: []
      }
    },
    getters: {
      productos(state) {
        return state.productos
      },
      catalogo(state) {
        return state.catalogo
      }
    },
    mutations: {
      SET_CATALOGO(state, payload) {
        state.catalogo = payload
      },
      SET_PRODUCTOS(state, payload) {
        state.productos = payload
      }
    },
    actions: {
      async tokenSession(){
        await repository.tokenSession();
      },
      async get_productos({commit}) {
        this.dispatch('tokenSession')
        const {data} = await repository.get_productos();
        console.log(data);
        commit('SET_PRODUCTOS', data)
        // return data;
      },
      async store_producto({dispatch}, params) {
        dispatch('tokenSession')
        const {data} = await repository.store_producto(params);
        console.log(data);
        return data;
      },
      async search_producto({commit}, name) {
        const {data} = await repository.search_producto(name);
        console.log(data.results);
        commit('SET_CATALOGO', data.results)
        // return data.results;
      },
      async get_producto(_, id) {
        const {data} = await repository.get_producto(id);
        console.log(data);
        return data;
      },
      async descripcion(_, id) {
        const {data} = await repository.descripcion(id);
        console.log(data);
        return data;
      }
    }
})
