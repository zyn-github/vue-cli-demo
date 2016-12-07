<template>
 	<div class="nav-bottom clear">
		<div class="nav-item pb-tab pb-tab-sel">
            <router-link to="/" class="pb-tab-bg nav-bottom-tab1"></router-link>
			
		</div>
		<div class="nav-item pb-tab">
            <router-link to="/bonds" class="pb-tab-bg nav-bottom-tab2"></router-link>
			
		</div>
		<div class="nav-item pb-tab">
            <router-link to="/info" class="pb-tab-bg nav-bottom-tab3"></router-link>
			
		</div>
		<div class="nav-item pb-tab">
            <router-link to="/my" class="pb-tab-bg nav-bottom-tab4"></router-link>
		</div>
     </div>
 </template>
<style>
.nav-bottom {
    overflow: hidden;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 1.4rem;
    width: 100%;
    z-index: 9999;
    border-top: 0.02rem solid #dcdcdc;
}
.nav-bottom div {
    width: 25%;
    height: 1.4rem;
    float: left;

}
.nav-bottom .nav-item>a {
    display: block;
    width: 100%;
    height: 1.4rem;
}
.nav-bottom-tab1 {
    background: url("../../images/YU_SNAV_03.png") no-repeat center;
    background-size: 0.85rem;
}
.nav-bottom-tab2 {
    background: url("../../images/YU_SNAV_05.png") no-repeat center;
    background-size: 0.85rem;
}
.nav-bottom-tab3 {
    background: url("../../images/YU_SNAV_07.png") no-repeat center;
    background-size: 0.85rem;
}
.nav-bottom-tab4 {
    background: url("../../images/YU_SNAV_09.png") no-repeat center;
    background-size: 0.85rem;
}
.pb-tab-sel .nav-bottom-tab1 {
    background: url("../../images/YU_SNAV_031.png") no-repeat center;
    background-size: 0.85rem;
}
.pb-tab-sel .nav-bottom-tab2 {
    background: url("../../images/YU_SNAV_051.png") no-repeat center;
    background-size: 0.85rem;
}
.pb-tab-sel .nav-bottom-tab3 {
    background: url("../../images/YU_SNAV_071.png") no-repeat center;
    background-size: 0.85rem;
}
.pb-tab-sel .nav-bottom-tab4 {
    background: url("../../images/YU_SNAV_091.png") no-repeat center;
    background-size: 0.85rem;
}
</style>

<script>
	import $ from 'jquery'
	$(function() {
		$('.nav-item').on('click',function(){
			$(this).addClass('pb-tab-sel').siblings().removeClass('pb-tab-sel');
		})
	})
</script>