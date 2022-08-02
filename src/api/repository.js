import apiMercadolibre from './api-mercado-libre.js'
import apiLaravel from './api-laravel.js'

export default 
    {
        tokenSession(){
            return apiLaravel.get('/sanctum/csrf-cookie');
        },

        // ----------
        // productos
        // ----------
        store_producto(params){
            return apiLaravel.post('/api/productos', params);
        },
        get_productos(){
            return apiLaravel.get('/api/productos');
        },
        search_producto(name){
            return apiMercadolibre.get(`sites/MCO/search?q=${name}`);
        },
        get_producto(id){
            return apiMercadolibre.get(`items/${id}`);
        },
        descripcion(id){
            return apiMercadolibre.get(`items/${id}/description`);
        }

    }