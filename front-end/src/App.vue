<template>
<div id="app">
	<div class='body-container'>
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/Operators">Operators</router-link>
		</div>
		<div class="content-wrapper">
			<router-view />
      <div class='footer'>
                  <div class='footer-item footer-one'></div>
                  <div class='footer-item footer-two'><a href="https://github.com/tyson-rodriguez25/creative_project3.git" class="github-link">Github</a></div>
                  <div class='footer-item footer-three'></div>
          </div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style>
body {
	background: #1D1F4E;
	padding: 20px;
	margin: 0px;
	position: relative;
	min-height: 100vh;
	padding-bottom: 60px;
}
#app {
	font-family: "Helvetica", serif;
	font-size: 15px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	background: #FFFFFF;
}
.body-container {
	margin-bottom: 20px;
}
.content-wrapper {
	margin: 5%;
	padding: 0% 15% 10% 15%;
}
#nav {
	padding: 10% 7.5%;
	background-size: 100%;
}
#nav a {
	font-weight: bold;
	color: #39393A;
}
#nav a.router-link-exact-active {
	color: #8A8A94;
}
@media only screen and (min-width: 961px) {
	body {
		padding: 40px;
	}
	#app {
		font-size: 35px;
		margin-bottom: 60px;
	}
	#nav {
		background-size: 75%
	}
	.content-wrapper {
		margin: 0%;
		padding: 0% 15% 3% 15%;
	}
}
.footer {
        display: flex;
        justify-content: space-between;
}
.footer-item {
        border: 1px solid #FFF;
        background-color: #A9A9A9;
        height: 30px;
        flex: 1;
}
.footer-one, .footer-three {
        background-color: #888888;
        flex: initial;
        width: 300px;
}
.github-link {
        display: flex;
        justify-content: center;
        font-size:16px;
}
a {
        color: #000000;
}
</style>
