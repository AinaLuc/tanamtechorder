<template>
  <div>
    <ErrorModal :errorMessage="someErrorMessage" @clear-error-message="clearErrorMessage" />
    <!-- Some other content -->
  </div>
</template>

<script>
import ErrorModal from '@/components/ErrorModal.vue';

export default {
  components: {
    ErrorModal,
  },
  data() {
    return {
      someErrorMessage: 'An error occurred!',
    };
  },
  methods: {
    clearErrorMessage() {
      // Handle clearing error message
    },
  },
};
</script>
