<template>
<div class="Bio">
  <img :src="'/images/Operators/' + operator.image">
  <h1>"{{operator.operator}}"</h1>
  <h2>Role:</h2>
  <p>{{operator.role}}</p>
  <h2>Name:</h2>
  <p>{{operator.name}}</p>
  <h2>Special Gadget:</h2>
  <p>{{operator.gadget}}
  <br>
  <h3>Bio</h3>
  <p>{{operator.Bio}}</p>
</div>
</template>

<script>
export default {
  name: 'Bio',
  computed: {
  },
  components: {
  },
  data() {
  return {
    random: 0,
  }
  },
  created() {
    this.operator = this.$root.$data.operators.find(operator => operator.id === parseInt(this.$route.params.id));
  }
}
</script>

<style>
.Bio img {
  width: 300px;
  height: 450px;
}
p {
  font-family: "Bahnschrift", "Calibri", sans-serif !important;
  font-size: 16px;
}
h2, h3 {
font-family: "Helvetica", "Calibri", sans-serif !important;
font-size: 24px;
}
h1 {
font-family: "Helvetica", "Calibri", sans-serif !important;
font-size: 36px;
}
</style>
