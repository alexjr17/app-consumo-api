<template>
  <HeaderLayout />
  <MainLayout />  
</template>
<script>
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
export default{
    components: {
      HeaderLayout,
      MainLayout
    },
    mounted(){
      this.$router.push({name: 'index'});
    }
}
</script>
