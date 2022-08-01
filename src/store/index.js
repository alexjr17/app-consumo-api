import { createStore } from 'vuex'
import repository from '@/api/repository'
export default createStore({
    actions: {
      async pag_productos({commit}, pag) {
        const {data} = await repository.pag_productos(pag);
        console.log(data);
        commit('SET_PRODUCTOS',data);
      },
      async store_producto(_, params) {
        console.log(params);
        const {data} = await repository.store_producto(params);
        console.log(data);
      },
      async search_producto(_, name) {
        const {data} = await repository.search_producto(name);
        console.log(data.results);
        return data.results;
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
