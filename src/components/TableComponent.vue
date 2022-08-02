<template>
    <table class="table table-striped table-bordered rounded-lg" style="width:100%">
        <thead class="bg-gray-400 rounde">
            <tr>
                <th class="px-1 py-3 pl-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    v-for="item in items" :key="item">
                    {{item}}
                </th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            <slot ></slot>            
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        items: {
            type:Array,
            required: true
        }
    }
}
</script>