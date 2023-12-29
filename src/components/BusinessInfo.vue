<!-- BusinessInfo.vue -->

<template>
  <div class="business-info-container">
    <h2>Step 2: Business Information</h2>
    <div class="form-group">
      <label for="businessName">Business Name:</label>
      <input v-model="businessName" type="text" id="businessName" placeholder="Business Name" />
    </div>
    <div class="form-group">
      <label for="usState">US State:</label>
      <select v-model="usState" @change="updateTotal">
        <option value="" disabled>Select a State</option>
        <option v-for="state in states" :key="state.name" :value="state.name">{{ state.name }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="businessDescription">Business Description:</label>
      <textarea v-model="businessDescription" id="businessDescription" placeholder="Business Description"></textarea>
    </div>
     <!-- New section for LLC Members -->
    <div class="llc-members-section">
      <h3>LLC Members</h3>
      <div v-for="(member, index) in llcMembers" :key="index" class="llc-member">
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input v-model="member.firstName" type="text" :id="'firstName' + index" :placeholder="'Member ' + (index + 1) + ' First Name'" />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input v-model="member.lastName" type="text" :id="'lastName' + index" :placeholder="'Member ' + (index + 1) + ' Last Name'" />
        </div>
        <div class="form-group">
          <label for="address">Address:</label>
          <textarea v-model="member.address" :id="'address' + index" :placeholder="'Member ' + (index + 1) + ' Address'"></textarea>
        </div>
        <div class="form-group">
          <label for="dob">Date of Birth:</label>
          <input v-model="member.dateOfBirth" type="date" :id="'dob' + index" :placeholder="'Member ' + (index + 1) + ' Date of Birth'" />
        </div>
      </div>
      <button @click="addMember">Add Member</button>
    </div>
       <!-- Display checkbox only when New York, Arizona, or Nebraska is selected -->
     

    
    <div class="fees-section" v-if="selectedState">
      <h3>Total Fees for {{ selectedState.name }}</h3>


      <!-- Display newspaper publication fees only when checkbox is selected -->
      
      <p>Our Filing Fees: $250</p>
      <p>State LLC Filing Fee: ${{ selectedState.fee }}</p>
       <div class="form-group" v-if="['New York', 'Arizona', 'Nebraska'].includes(selectedState.name)">
        <label>
          <input type="checkbox" v-model="includeNewspaperFee" />
          <span>Include Newspaper Publication Fee</span>
        </label>
      </div>
      <p v-if="includeNewspaperFee && ['New York', 'Nebraska', 'Arizona'].includes(selectedState.name)">
        Newspaper Publication Fee: ${{ getNewspaperPublicationFee(selectedState.name) }}
      </p>
      <p>Benefits:</p>
      <ul>
        <li>One Year Registered Agent</li>
        <li>PDF Guide to E2 Visa</li>
      </ul>
    </div>
    <div class="form-group">
      <button @click="prev">Previous</button>
      <button @click="next">Next</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      businessName: "",
      usState: "",
      businessDescription: "",
      states: [
        { name: 'Alabama', fee: 200, annualFee: 50 },
        { name: 'Alaska', fee: 250, annualFee: 100 },
        { name: 'Arizona', fee: 50, annualFee: 0 },
        { name: 'Arkansas', fee: 45, annualFee: 150 },
        { name: 'California', fee: 70, annualFee: 820 },
        { name: 'Colorado', fee: 50, annualFee: 10 },
        { name: 'Connecticut', fee: 120, annualFee: 80 },
        { name: 'Delaware', fee: 90, annualFee: 300 },
        { name: 'Florida', fee: 125, annualFee: 138.75 },
        { name: 'Georgia', fee: 100, annualFee: 50 },
        { name: 'Hawaii', fee: 50, annualFee: 15 },
        { name: 'Idaho', fee: 100, annualFee: 0 },
        { name: 'Illinois', fee: 150, annualFee: 75 },
        { name: 'Indiana', fee: 95, annualFee: 31 },
        { name: 'Iowa', fee: 50, annualFee: 30 },
        { name: 'Kansas', fee: 160, annualFee: 50 },
        { name: 'Kentucky', fee: 40, annualFee: 15 },
        { name: 'Louisiana', fee: 100, annualFee: 35 },
        { name: 'Maine', fee: 175, annualFee: 85 },
        { name: 'Maryland', fee: 100, annualFee: 300 },
        { name: 'Massachusetts', fee: 500, annualFee: 500 },
        { name: 'Michigan', fee: 50, annualFee: 25 },
        { name: 'Minnesota', fee: 155, annualFee: 0 },
        { name: 'Mississippi', fee: 50, annualFee: 0 },
        { name: 'Missouri', fee: 50, annualFee: 0 },
        { name: 'Montana', fee: 35, annualFee: 20 },
        { name: 'Nebraska', fee: 100, annualFee: 13 },
        { name: 'Nevada', fee: 425, annualFee: 350 },
        { name: 'New Hampshire', fee: 100, annualFee: 100 },
        { name: 'New Jersey', fee: 125, annualFee: 75 },
        { name: 'New Mexico', fee: 50, annualFee: 0 },
        { name: 'New York', fee: 200, annualFee: 9 },
        { name: 'North Carolina', fee: 125, annualFee: 200 },
        { name: 'North Dakota', fee: 135, annualFee: 50 },
        { name: 'Ohio', fee: 99, annualFee: 0 },
        { name: 'Oklahoma', fee: 100, annualFee: 25 },
        { name: 'Oregon', fee: 100, annualFee: 100 },
        { name: 'Pennsylvania', fee: 125, annualFee: 7 },
        { name: 'Rhode Island', fee: 150, annualFee: 50 },
        { name: 'South Carolina', fee: 110, annualFee: 0 },
        { name: 'South Dakota', fee: 150, annualFee: 50 },
        { name: 'Tennessee', fee: 300, annualFee: 300 },
        { name: 'Texas', fee: 300, annualFee: 0 },
        { name: 'Utah', fee: 54, annualFee: 18 },
        { name: 'Vermont', fee: 125, annualFee: 35 },
        { name: 'Virginia', fee: 100, annualFee: 50 },
        { name: 'Washington', fee: 200, annualFee: 60 },
        { name: 'Washington DC', fee: 99, annualFee: 300 },
        { name: 'West Virginia', fee: 100, annualFee: 25 },
        { name: 'Wisconsin', fee: 130, annualFee: 25 },
        { name: 'Wyoming', fee: 100, annualFee: 60 },
      ],
      selectedState: null,
      includeNewspaperFee: false,
      llcMembers: [],

    };
  },
  methods: {
    prev() {
      this.$router.push("/");
    },
     getNewspaperPublicationFee(stateName) {
      // Function to get newspaper publication fee based on the selected state
      switch (stateName) {
        case 'New York':
          return 476;
        case 'Nebraska':
          return 450;
        case 'Arizona':
          return 220;
        default:
          return 0;
      }
    },
    async sendDataToBackend() {
      // Prepare the data to be sent to the backend
        const clientId = this.$route.params.clientId;

      const dataToSend = {
        clientId:clientId,
        name: this.businessName,
        state: this.usState,
        description: this.businessDescription,
        newsPub:this.includeNewspaperFee,
        totalFees: this.calculateTotalFees(),
        llcMembers:this.llcMembers,
      };

       try {
    const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/save-business/`, dataToSend);
    // Handle the response from the backend if needed
    console.log('Response from backend:', response.data);
  } catch (error) {
    // Handle errors
    console.error('Error sending data to backend:', error);
  }
    },
    next() {
     this.sendDataToBackend();

      // Pass total fees to the next route
    this.$router.push({ path: "/payment", query: { totalFees: this.calculateTotalFees() } });
    },
    updateTotal() {
      // Find the selected state and update the total
      this.selectedState = this.states.find(state => state.name === this.usState);
    },
    calculateTotalFees() {
    // Calculate your total fees logic here
    // For example, summing up the filing fee and annual fee
    if (this.selectedState) {
      return this.selectedState.fee + 250;
    }
    return 0;
  },
   addMember() {
      // Add a new member to the LLCMembers array
      this.llcMembers.push({
        firstName: "",
        lastName: "",
        address: "",
        dateOfBirth: "",
      });
    },
  },
};
</script>

<style src="./BusinessInfo.css" scoped>
  
.checkbox-label {
  display: flex;
  align-items: center;
}
.checkbox-text {
  margin-left: 5px; /* Adjust margin as needed */
}
</style>

