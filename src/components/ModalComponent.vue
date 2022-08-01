<template>
  <Transition name="modal">
    <div v-if="show" class="fixed inset-0 flex justify-center items-center">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="$emit('close')"></div>
      <div class="fixed bg-white flex flex-col h-auto w-96 p-5">
        <div class="text-green-500 text-center" v-if="hasHeader">
          <slot name="header" ></slot>
        </div>

        <div class="modal-body">
          <slot name="body"></slot>
        </div>

        <div class="modal-footer" v-if="hasFooter">
          <slot name="footer">
          </slot>
        </div>
      </div>       
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    show: Boolean
  },
  computed: {
    hasFooter() {
      return this.$slots.footer;
    },
    hasHeader() {
      return this.$slots.header;
    }
  },
}
</script>

<style>
    .modal-enter-from {
    opacity: 0;
    }

    .modal-leave-to {
    opacity: 0;
    transition: all 0.3s ease;
    }

    .modal-enter-from .modal-container,
    .modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    }
</style>