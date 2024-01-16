<!-- ErrorModal.vue -->
<template>
  <b-modal v-if="errorMessage" title="Error" @hidden="clearErrorMessage">
    {{ errorMessage }}
  </b-modal>
</template>

<script>
export default {
  props: ['errorMessage'],
  methods: {
    clearErrorMessage() {
      this.$emit('clear-error-message');
    },
  },
};
</script>
