<template>
	<div id="logo" class="inner-container">
		<div id="overlay" class="outer-container">
			<img id="logo-img" src="./../assets/logo.png" />
		</div>
	</div>
</template>

<script>
	export default {

	};
</script>

<style scoped>
#logo {
	height: calc(100% - 80px);
	width: calc(100% - 80px);
	overflow: hidden; /* To prevent child margin pushing background down */
}

#overlay {
	height: calc(100% - 40px);
	width: calc(100% - 40px);

	background-color: #444343;

	margin-left: 20px;
	margin-top: 20px;
}

#logo-img {
	width: 373px;
	height: auto;

	position: relative;
	left: 50%;
	top: 50%;
	transform: translateX(-50%) translateY(-50%);
}
</style>
		