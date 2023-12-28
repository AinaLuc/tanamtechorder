<!-- EmailInput.vue -->

<template>
  <div class="email-input-container">
    <h2 class="step-title">Step 1: Enter Email</h2>
    <input v-model="email" type="email" class="email-input" placeholder="Enter your email" />
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
    };
  },
  methods: {
     async saveClient() {
                  try {
                    const response = await axios.post('http://localhost:3000/save-email', {
                      email: this.email,
                      // Add other fields as needed based on your backend model
                    });

                    const clientId = response.data.clientId;

                    return clientId; // Returning the clientId for chaining

                  } catch (error) {
                    console.error('Error saving client:', error);
                  }
                },
    next() {

      
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
