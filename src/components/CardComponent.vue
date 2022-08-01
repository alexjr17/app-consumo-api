<template>
    
</template>

<script>
export default {
    props: {
        articulo: {
            type: Array,
            required: true
        }
    },
    watch: {
        articulo: function (newValue, oldValue) {
        console.log("newValue: %s, previousValue: %s", newValue, oldValue);
        },
    }
}
</script>