<template>
	<div>
		<div class="foodsdetail-div1">
			<img src="../../assets/index/back.png">
			
		</div>


		<div class="foodsdetail-div2">
			 <el-carousel indicator-position="none" height="4.133333rem">
			    <el-carousel-item v-for="item in 4" :key="item">
			     <img src="../../assets/foods/foods.png" class="foodsdetail-img1">
			    </el-carousel-item>
			 </el-carousel>
		</div>

		<div class="foodsdetail-div3">
			<h1>冬瓜排骨蛤蜊汤</h1>
			<p>
				<span>￥798</span>
				<span>￥999</span>
				<span>限时特惠</span>
			</p>


		</div>

		<div class="foodsdetail-div4">
				<h1 class=""><p>5.0</p><p>超出预期</p></h1>
				<div class="foodsdetail-div5">
					<p>评论(120)</p>
					<span>服务不错(30)</span>
					<span>非常干净(30)</span>
				</div>
				<span class="foodsdetail-span1">&gt;</span>
		</div>

	</div>
</template>

<script type="text/javascript">
	
	export default {
		name:"foodsdetail",
		data(){
			return {

			}
		}
	}
</script>

<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style type="text/css" scoped>
	.foodsdetail-div1{
		display: flex;
		height: 120px;
		width: 100%;
		text-align: center;
		background-color: #FFF;
	}
	.foodsdetail-div1 img{
		width:22px;
		height:39px;
		margin-left: 42px;
		margin-top: 64px;
	}
	.foodsdetail-div2{
		background-color: #FFF;
		padding-top: 40px;
	}
	 .foodsdetail-div2 .el-carousel__item h3 {
	    color: #475669;
	    font-size: 18px;
	    opacity: 0.75;
	    line-height: 300px;
	    margin: 0;
	}
	.foodsdetail-img1{
		width:660px;
		height: 310px;
		margin-left:40px;
	}
	.foodsdetail-div3{
		background-color: #FFF;
		padding-left: 40px;
		padding-top: 30px;
		margin-bottom: 15px;
	}
	.foodsdetail-div3 h1{
		font-family:PingFangSC-Medium;
		font-size:36px;
		color:#333333;

	}
	.foodsdetail-div3 p{
		padding-top: 14px;

	}
	.foodsdetail-div3 p span:nth-child(1){
		width: 100px;
		height: 62px;
		display: inline-block;
		font-family:PingFangSC-Regular;
		font-size:36px;
		color:#fa4c01;
		letter-spacing:-0px;
	}
	.foodsdetail-div3 p span:nth-child(2){
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		letter-spacing:-0px;
		text-decoration: line-through;
	}
	.foodsdetail-div3 p span:nth-child(3){
		font-family:PingFangSC-Regular;
		font-size:20px;
		color:#fa4c01;
		letter-spacing:0.09px;
		display: inline-block;
		width: 91px;
		height: 23px;
		border:1px solid #fa4c01;
		border-radius:3px;
		text-align: center;
		vertical-align:top;

	}


	.foodsdetail-div4{
		display: flex;
		padding-left: 41px;
		padding-top: 21px;
		background-color: #FFF;
		justify-content: center;
		height: 145px;

	}

	.foodsdetail-div4 h1{
		width: 130px;
		height: 116px;
		text-align: center;



	}

	.foodsdetail-div4 h1 p:nth-child(1){
		font-family:Arial-BoldMT;
		font-size:48px;
		color:#ffffff;
		letter-spacing:0.17px;
		background-image: url(../../assets/stay/bg.png);
		height: 64px;
		line-height: 64px;
		width: 130px;

	}
	.foodsdetail-div4 h1 p:nth-child(2){
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fdab2b;
		letter-spacing:0.09px;	
		height: 52px;
		line-height: 52px;
		background:#fffaf0;
		width: 130px;

	}
	.foodsdetail-div5{
		margin-left: 30px;
		width: 460px;

		
	}
	.foodsdetail-div5 p{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#333333;
		letter-spacing:0.1px;
	}
	.foodsdetail-div5 span{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fdab2b;
		letter-spacing:0.09px;
		display: inline-block;
		background:#f2f2f2;
		border-radius:24px;
		width:181px;
		height:48px;
		text-align: center;
		line-height: 48px;
		margin-top: 15px;
		margin-right: 10px;
	}
	.foodsdetail-span1{
			color: #000;
		font-size: 35px;
		margin-left: 10px;
		display: block;
		width: 80px;
		line-height: 58px;
		height: 58px;
		margin-top: 15px;

	}

</style>