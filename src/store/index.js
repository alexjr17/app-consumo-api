import { createStore } from 'vuex'
import repository from '@/api/repository'
export default createStore({
    actions: {
      async tokenSession(){
        await repository.tokenSession();
      },
      async get_productos() {
        this.dispatch('tokenSession')
        const {data} = await repository.get_productos();
        console.log(data);
        return data;
      },
      async store_producto({dispatch}, params) {
        dispatch('tokenSession')
        const {data} = await repository.store_producto(params);
        console.log(data);
        return data;
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
