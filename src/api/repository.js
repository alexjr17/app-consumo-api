import api from './api'

export default 
    {
        tokenSession(){
            return api.get('/sanctum/csrf-cookie');
        },

        // ----------
        // productos
        // ----------
        store_producto(params){
            return api.post('api/productos', params);
        },
        search_producto(name){
            return api.get(`sites/MCO/search?q=${name}`);
        },
        get_producto(id){
            return api.get(`items/${id}`);
        },
        descripcion(id){
            return api.get(`items/${id}/description`);
        }

    }