<!-- 组件写到template里 -->
<template>
	<div>
			<!-- 二级路由容器  让二级路由的内容显示在页面上 -->
			<router-view></router-view>
		<ul class="home">
			<div class="home-div1" @click="handleClick">
			<router-link to="/home/index" tag="li" :class="isA?'bb':'aa'">首页</router-link>
			</div> 
			<div class="home-div1" @click="handleClick1">
			<router-link to="/home/shops" tag="li">商铺</router-link>
			</div >
			<div class="home-div1">
			<router-link to="/home/shopcar" tag="li">购物车</router-link>
			</div >
			<div class="home-div1">
			<router-link to="/home/personal" tag="li">我的</router-link>
			</div>
		</ul>
	</div>
</template>

<script type="text/javascript">
	
	export default {
		name:"home",//对外提供接口
		data(){
			return {
				isA:false
			}
		},
		methods:{
			handleClick(){

        		this.isA=!this.isA
        	},
        	handleClick1(){
        		this.isA=!this.isA
        	}
		}
	}
</script>




<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style type="text/css" scoped>
	.home{
		display: flex;
		width: 750px;
		position: fixed;
		bottom: 0;
		left: 0;
		text-align: center;
		height: 100px;
		line-height: 100px;
		border-top:1px solid #CCC;
		z-index: 9999;
		background-color: #FFF;
	}
	.home-div1{
		flex: 1;
		font-size:20px;
	}
	.bb{

	}
	.aa{
		color:#fdab2b;
	}
</style>