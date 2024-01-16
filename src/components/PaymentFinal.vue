<!-- Payment.vue -->
<template>
  <div class="payment-container">
    <h2 class="payment-title">Step 3: Payment</h2>
    <p class="total-fees">Total Fees: ${{ totalFees }}</p>
    <!-- Add payment form fields here -->
    <form ref="stripeForm" class="payment-form">
      <!-- Stripe elements go here -->
      <div class="form-group">
        <label for="card-element">Cardholder's Name:</label>
        <input id="cardholder-name" v-model="cardholderName" type="text" placeholder="John Doe" />
      </div>
      <div id="card-element" class="card-element"></div>
      <!-- Used to display form errors. -->
      <div id="card-errors" role="alert" class="error-message"></div>
      <button @click.prevent="prev" class="button">Previous</button>
      <button @click.prevent="submit" class="button" :disabled="processingPayment">
        <span v-if="processingPayment">Processing...</span>
        <span v-else>Submit</span>
      </button>    </form>
  </div>
   <div class="image-container">
      <img src="@/assets/pay2.jpg" alt="Payment Image" class="payment-image"  style="width: 80%; margin: 0 auto;"/>
    </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/pure';
import axios from 'axios';
import './Payment.css'; // Import the CSS file

export default {
  data() {
    return {
      totalFees: 0,
      cardholderName: '', // Added field for cardholder's name
      stripe: null,
      elements: null,
      processingPayment: false,
       isFormValid: false,

    };
  },
  created() {
    // Retrieve total fees from the route query
    this.totalFees = this.$route.query.totalFees || 0;

    // Load Stripe
    this.loadStripe();

     // Set the base URL for Axios
  axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
  },
  methods: {
     validateForm() {
      // Validate cardholder name and any other form fields if needed
      const isCardholderNameValid = this.cardholderName.trim() !== '';

      // Update the form validity state
      this.isFormValid = isCardholderNameValid;

      return this.isFormValid;
    },
    async loadStripe() {
      // Load the Stripe.js script asynchronously
      const stripe = await loadStripe('pk_live_51MnMGrE1uOh1UBiwgHnSC8b8OKZhFEuSGIHjTa88gUmJ82JADCkaadlPd0tOrjc6JfrLkGSOkV714SgnV8QkvlKF00PrqzpBgj');
      this.stripe = stripe;
      this.elements = stripe.elements();

      // Create an instance of the card Element.
      const card = this.elements.create('card', {
        // Include the 'name' attribute for the cardholder's name
        style: {
          base: {
            iconColor: '#666EE8',
            color: '#31325F',
            fontSize: '16px',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
        },
        classes: {
          base: 'stripe-card',
        },
        hidePostalCode: true, // You can adjust this based on your requirements
        hideIcon: false, // Show the card icon
        hideBrand: false, // Show the card brand icon
      });

      // Mount the card Element.
      card.mount('#card-element');

      // Handle real-time validation errors from the card Element.
      card.addEventListener('change', (event) => {
        const displayError = document.getElementById('card-errors');
        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = '';
        }
      });
    },
    prev() {
      this.$router.push("/business-info");
    },
     showErrorMessage(message) {
    // Display the error message to the user using a modal or an alert
    alert(`Error: ${message}`);
  },
    async submit() {
      if (this.validateForm()) {

  this.processingPayment = true;

  // Create an instance of the card Element.

  const cardElement = this.elements.getElement('card');

  // Collect the payment method details
  const { paymentMethod, error } = await this.stripe.createPaymentMethod({
    type: 'card',
    card: cardElement,
    billing_details: {
      name: this.cardholderName,
    },
  });

  if (error) {
    // Handle errors
    console.log('error in')
    console.error(error);
    this.showErrorMessage(error.message); // Show error message
    this.processingPayment = false;


  } else {
    console.log('Request Payload:', {
  clientId: this.$route.query.clientId,
  amount: this.totalFees,
  currency: 'usd',
  description: 'Payment for services',
  payment_method: paymentMethod.id,
});
    // Make the request to create a PaymentIntent
    const response = await axios.post('/create-payment-intent', {
  clientId: this.$route.query.clientId,

      amount: this.totalFees , // Amount in cents
      currency: 'usd',
      description: 'Payment for services',
      payment_method: paymentMethod.id, // Pass the Payment Method ID
    });

    const clientSecret = response.data.clientSecret;

    // Use the clientSecret to confirm the payment on the client side
    const { paymentIntent, error } = await this.stripe.handleCardPayment(clientSecret);

    if (error) {
      // Handle errors
      console.log('error 2')
      console.error(error);
              this.showErrorMessage(error.message); // Show error message
              this.processingPayment = false;


    } else {
      // Payment succeeded
      console.log(paymentIntent);
        this.processingPayment = false;

      this.$router.push('/thank-you');

    }
  }
 } else {
        // Optionally, you can provide user feedback for invalid form
        console.error('Form is not valid. Please fill out all required fields.');
      }
  },
}
};
</script>
