<template>
    <button
        class="inline-flex items-center px-2 py-2 border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
        :class="`text-gry hover:text-white rounded-md bg-blue-500 hover:bg-blue-600 border-blue-300`"
        :type="type"
        >
        <font-awesome-icon :icon="icon" v-if="icon"/>
        {{name}}
    </button>
</template>

<script>
export default {
    props:{
        id: {
             type: String,
             required: false
        },
        type: {
            type: String,
            required: false,
            default: 'button'
        },
        value:{
            type: String,
            required: true
        },
        icon:{
            type: String,
            required: false
        }
    },
    computed: {
        name() {
            return this.value ? this.value : ''
        }
    },
}
</script>