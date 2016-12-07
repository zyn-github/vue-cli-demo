<template>
	<div class="menu">
		<div class="menuTitle">
	    	<router-link to="/mission" router-link-active>推荐任务</router-link>
	        <router-link to="/shop" router-link-active>推荐店铺</router-link>
	    </div>
	    <router-view keep-alive></router-view>
	</div>
</template>

<style type="text/css">
	.menuTitle .router-link-active{
		background: url(../../images/sy_shug_05.png) 1.7rem center no-repeat;
	    color: #3f98f5;
	    background-size: 0.07rem;
	}
</style>