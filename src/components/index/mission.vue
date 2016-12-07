<style>
	@import '../../css/index/mission.css';
	@import '../../css/swiper.min.css';
</style>
<template>
	<div id="taskList">
		<ul class="menuContent fn-clear">
				<li id="li" v-for="itemW in posts.data" :Userid=itemW.id>
					<router-link class="a_container" :to="{ path: '/detial', query: { taskId: itemW.id }}">
						<p class="Yu_grxx"><span class="userImg">{{itemW.tracername}}</span> <section style="display:inline-block" v-if="itemW.up==1"><i>置</i><i>顶</i></section><b style="margin-top: 0;">5天后截止</b></p>
						<div class="scroll fn-clear">
							<div class="swiper-container" style="height:2.1rem">
						        <div class="swiper-wrapper">
						            <div class="swiper-slide" v-for="img in itemW.imgpath">
						            	<img class="img" :src="img">
						            </div>
						        </div>
						    </div>
							<div class="dotModule_new" style="display: none;">
								<div id="slide_01_dot"></div>
							</div>
						</div>
						<p class="Yu_maner"><span>{{itemW.money}}</span><b>上门催收借款</b></p>
						<p class="Yu_neir">{{itemW.claims}}</p>
						<p class="Yu_weizh"><span><a>北京</a>｜<a>大兴</a></span><b style="margin-top: 0;">{{itemW.createtime}}</b></p>
					</router-link>
				</li>
		</ul>
	</div>
</template>

<script>
	import $ from '../../../jquery'
	import Vue from 'vue'
	import Swiper from '../../js/swiper.min.js'
	export default {
		name:'taskList',
		data(){
			return {
		         posts:{}
	      	}
		},
		created:function(){
			 this.$http.get('/api/Home/Task/taskList').then(function(data){
			 	this.posts=JSON.parse(data.data);
		    	console.log(typeof this.posts)
		    });
		},
		ready:function(){
			var swiper = new Swiper('.swiper-container', {
		        paginationClickable: true
		    });
	  	}
	}
</script>