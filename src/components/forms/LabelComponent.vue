<template>
    <div>
        <label class="text-sm text-gray-700 w-full">
            {{ value}}
        </label>
    </div>   
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true
        }
    }
}
</script>