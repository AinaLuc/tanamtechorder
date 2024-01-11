<!-- EmailInput.vue -->

<template>
  <div class="email-input-container">
    <h2 class="step-title">Step 1: Enter Email</h2>
    <input v-model="email" type="email" class="email-input" placeholder="Enter your email" required />
    <label v-if="isEmailInvalid" class="error-label">Invalid email format</label>

    <button @click="next" class="next-button">Next</button>
  </div>
     <!-- Add a wrapping div for the image -->
    <div class="image-container">
      <img src="@/assets/testimonial.png" alt="Your Image Description" class="form-image" />
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: "",
      isEmailInvalid: false,
    };
  },
  methods: {
     async saveClient() {
                  try {
                    console.log('url',`${process.env.VUE_APP_BASE_URL}/save-email`)
                    const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/save-email`, {
                      email: this.email,
                    });

                    const clientId = response.data.clientId;

                    return clientId; // Returning the clientId for chaining

                  } catch (error) {
                    console.error('Error saving client:', error);
                  }
                },
     validateEmail() {
      // Use a simple regular expression for email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.email);
    },
    next() {

        // Check if the email is empty or has an invalid format before proceeding
      if (this.email.trim() === "" || !this.validateEmail()) {
        // Display an error message
        this.isEmailInvalid = true;
        return;
      }

      // Reset the error state
      this.isEmailInvalid = false;

      
    this.saveClient()
      .then(clientId => {
        // Do something with the clientId if needed
        this.$router.push(`/business-info/${clientId}`);
      })
      .catch(error => {
        // Handle the error
        console.error('Error in next():', error);
      });
 
               
    },
  },
};
</script>

<style src="./EmailInput.css" scoped></style>
