<style>
	@import '../../css/swiper.min.css';
	@import '../../css/shen.css';
</style>
<template>
	<div id="detial">
		<div class="main" style="padding-bottom:0.8rem;">
			 <h3 class="about-h2" style="margin-bottom:0;"><a class="about-a1" id="about-a1"><img src="../../images/common4.png"></a>发悬赏<a class="about-a2"><img src="../../images/common5.png"></a></h3>
			 	<div class="z-banner">
			 		<div class="swiper-container">
			            <div class="swiper-wrapper">
			                <div class="swiper-slide" style="width:100% !important"><img src="../../images/z-banner.jpg"></div>
			                <div class="swiper-slide" style="width:100% !important"><img src="../../images/z-banner.jpg"></div>
			                <div class="swiper-slide" style="width:100% !important"><img src="../../images/z-banner.jpg"></div>
			            </div>
			            <div class="swiper-pagination"></div>
			        </div>
			 		<div class="audio_sound">
			        	<audio id="audio">
			            	<source src="../audio/music.mp3" type="audio/mpeg">
			            </audio>
			        </div>
			        <h3 class="zhaiquan-h3"><a>顶</a><a>急</a>￥1000 找京PV88888</h3>
			        <ul class="zhaiquan-ul">
			        	<li>未托管资金</li>
			            <li>接单中</li>
			            <li>结束时间</li>
			        </ul>
			 	</div>
			    <div class="con-box con1">
			    	<ul class="con1-ul">
			        	<li><p>任务编号：<a>3456789</a></p></li>
			            <li><p>目的：<a>解决失联</a></p></li>
			            <li><p>执行地点：<a>北京市</a></p></li>
			            <li><p>悬赏原因：<a>金融机构债权</a></p></li>
			            <li><p>法律阶段：<a>诉前</a></p></li>
			            <li><p style=" border:none;">数量：<a>5</a></p></li>
			        </ul>
			    </div>
			    <div class="con-box">
			    	<h3 class="con-h3">任务要求</h3>
			        <p class="con-p">本人借款170000元，借款用于公司资金周转。本人在北京市东城区经营一家工程建筑有限公司，公司发展京市东城区经营一家工程建筑有限公司，公司发展京市东城区经</p>
			    </div>
			    <div class="con-box">
			    	<h3 class="con-h3">已知线索</h3>
			        <p class="con-p">本人借款170000元，借款用于公司资金周转。本人在北京市东城区经营一家工程建筑有限公司，公司发展京市东城区经营一家工程建筑有限公司，公司发展京市东城区经</p>
			    </div>
			    
			    <div id="save">
			    	<a class="common-btn common-btn-l">联系委托人</a>
			    	<a class="common-btn common-btn-b">保存</a>        
			    </div>
			 </div>
	</div>
</template>

<script>
	import $ from '../../../jquery'
	import Vue from 'vue'
	import Swiper from '../../js/swiper.min.js'
	export default {
		name:'detial',
		data(){
			return {
		         detial:{}
	      	}
		},
		created:function(){
			var id = this.$route.query.taskId;
			console.log('taskId',id);
			 // this.$http.get('/api/Home/Task/taskList').then(function(data){
			 // 	this.posts=JSON.parse(data.data);
		  //   	console.log(typeof this.posts)
		  //   });
		  	var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        spaceBetween: 30,
			});
		}
	}
</script>