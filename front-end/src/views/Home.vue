<template>
<div class="home">
	<img alt="Six Logo" src="../images/SixLogo2.jpg" class="logo">
	<h1>Rainbow Six Siege</h1>
	<h1>Operator Information</h1>
</div>
</template>

<script>
export default {
	name: 'Home',
}
</script>

<style>
.logo {
	width: 50%;
}
.home h1 {
	font-size: 30px;
}
@media only screen and (min-width: 961px) {
	.logo {
		width: 65%;
	}
}
</style>
