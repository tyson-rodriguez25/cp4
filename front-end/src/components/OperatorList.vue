<template>
<div class="wrapper">
  <div class="operators">
    <div class="operator" v-for="operator in operators" :key="operator.id">
    <div class="image">
      <img :src="'/images/Operators/'+ operator.image">
    </div>
      <div class="info">
          <router-link :to="'/operators/' + operator.id">{{operator.operator}}</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'OperatorList',
  props: {
    operators: Array
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.operators {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.operator {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}
.operator img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}
.operator .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}
.operator a {
	color: #000000;
  font-family: "Bahnschrift", "Calibri", sans-serif !important;
}
.info {
  background: #FFFFFF;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}
.info h1 {
  font-size: 16px;
}
.info h2 {
  font-size: 14px;
}
.info p {
  margin: 0px;
  font-size: 10px;
}
.auto {
  margin-left: auto;
}
</style>
