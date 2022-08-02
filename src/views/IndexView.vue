<template>
    <div class="container m-auto flex flex-col gap-6 mx-6">
        <div class="flex flex-row  mt-3">
            <input-component class="grow"
                v-model="name"/>
            <button-component 
            value="buscar"
            @click="search()"/>
        </div>
        <div class="grid grid-cols-3 gap-3">
            <div v-for="producto in catalogo" :key="producto.id" class="rounded-lg shadow-md p-5">
                <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img :src="producto.thumbnail" class="w-full h-full object-center object-cover">
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                    <a href="#">
                    {{producto.title}}
                    </a>
                    {{producto.price}}
                </h3>
                <button-component 
                    value="detalle"
                    @click="getProducto(producto.id)"/>
            </div>         
        </div>        
    </div>
    <modal-component
        :show="show"
        @close="show = !show">
        <template #body>
            <div class="grid grid-cols-1 gap-3 my-3">
                <h1>Producto: {{producto.title}}</h1>
                <span>Precio: {{producto.price}}</span>
                <div class="flex flex-row gap-3">
                    <img v-for="image in producto.pictures" :key="image"
                        :src="image.url"                         
                        class="w-full h-full object-center object-cover rounded-md hadow-md">
                </div>
                <article class="bg-blue-500 rounded-lg p-2 flex w-auto">
                    <!-- <p>{{producto.alex.plain_text}}</p> -->
                </article>
                <button-component 
                    value="Guardar"
                    @click="storeProducto()"/>
            </div>
        </template>
    </modal-component>
</template>

<script>
// import CardComponent from '@/components/CardComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue'
import InputComponent from '@/components/forms/InputComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            name: 'xiaomi',
            producto: [],
            show: false
        }
    },
    computed: {
        ...mapGetters({
            catalogo : 'catalogo'
        })
    },
    components: {
        // CardComponent,
        InputComponent,
        ButtonComponent,
        ModalComponent
    },
    methods: {
        async search() {
            await this.$store.dispatch('search_producto', this.name)
            console.log(this.catalogo);
        },
        async getProducto(id) {
            this.show = !this.show
            this.producto = await this.$store.dispatch('get_producto', id)
            this.producto.alex = await this.$store.dispatch('descripcion', id)
        },
        async storeProducto() {
            let formData = new FormData();
            formData.append("title", this.producto.title);
            formData.append("price", this.producto.price);
            formData.append("image", this.producto.pictures[0]['url']);
            formData.append("description", this.producto.alex.plain_text);
            try {
                await this.$store.dispatch('store_producto', formData)
                this.show = !this.show
                alert('registro guardado!')
                this.$router.push({name: 'productos.index'})
            } catch (error) {
                console.log(error)
                alert('no se pudo  guardado!')
            }
        }
    }

}
</script>