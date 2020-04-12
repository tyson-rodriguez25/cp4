<template>
<div>
  <OperatorList :operators="operators" />
</div>
</template>

<script>
import OperatorList from "../components/OperatorList.vue"
export default {
  name: 'Operators',
  components: {
    OperatorList
  },
  data() {
    return {
    }
  },
  computed: {
    operators() {
      return this.$root.$data.operators;
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.info {
  background: #F2921D;
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
.price {
  display: flex;
}
button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}
.auto {
  margin-left: auto;
}
</style>
