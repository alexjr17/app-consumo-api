<template>
    <div>
        <table-component
            :items="items">
            <tr v-for="producto in productos" :key="producto" class="px-1 py-1 pl-4">
                <td-component>
                    {{ producto.id }}
                </td-component>
                <td-component>
                    {{ producto.title }}
                </td-component>
                <td-component>
                    {{ producto.price }}
                </td-component>
                <td-component>
                    <img :src="producto.image" alt="" v-if="producto.image">
                </td-component>
                <td-component>
                    {{ producto.description }}
                </td-component>
            </tr>
        </table-component>
    </div>
</template>
<script>
import TableComponent from '@/components/TableComponent.vue'
import tdComponent from '@/components/table/tdComponent.vue'
export default {
    components: {
        TableComponent,
        tdComponent
    },
    data() {
        return {
            items: ['id' ,'title', 'precio', 'imagen', 'description'],
            productos: []
        }
    },
    async mounted() {
        try {
            this.productos = await this.$store.dispatch('get_productos')
        } catch (err) {
            console.log(err)
        }
    },
}
</script>