<!-- ErrorModal.vue -->
<template>
  <div class="error-modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <p>{{ errorMessage }}</p>
      <button @click="closeModalAndReturn">Return to Payment</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: String,
  },
  methods: {
    closeModal() {
      this.$emit('clear-error-message');
    },
    closeModalAndReturn() {
      this.closeModal();
      this.$emit('return-to-payment');
    },
  },
};
</script>

<style scoped>
/* Add your modal styling here */
.error-modal {
  /* Styles for the overlay */
}

.modal-content {
  /* Styles for the modal content */
}

.close {
  /* Styles for the close button */
}

button {
  /* Styles for the Return to Payment button */
}
</style>
