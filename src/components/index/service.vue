<template>
	<div>
		<div class="service-div1">
			<img src="../../assets/index/back.png">
		<h1>养生服务</h1>
		</div>
		<div class="service-div2">
			<h1><span>服务推荐</span></h1>
			<div class="service-div3">
			<div class="block">
			    <el-carousel height="3.6rem">
			      <el-carousel-item v-for="item in 4" :key="item">
			        <img src="../../assets/service/service.png" class="service-img1">
			      </el-carousel-item>
			    </el-carousel>
			 </div>
			 <div class="service-div4">
				 <h2>经络艾灸养生服务套餐</h2>
				 <span>￥398</span>
				 <span>月销201件</span>
			 </div>
			 </div>

		</div>


		<div class="service-div5">
			<div class="service-div2">
				<h1><span>养生服务</span></h1>
			</div>
		
		<div class="service-div6">
			<ul>
				<li>
					<img src="../../assets/service.png" class="service-img2">
					<h3>脸部补水祛斑精油</h3>
					<span>￥789</span>
					<span>月销201件</span>
				</li>
				<li>
					<img src="../../assets/service/service1.png" class="service-img2">
					<h3>脸部补水祛斑精油</h3>
					<span>￥789</span>
					<span>月销201件</span>
				</li>
				<li>
					<img src="../../assets/service/service2.png" class="service-img2">
					<h3>脸部补水祛斑精油</h3>
					<span>￥789</span>
					<span>月销201件</span>
				</li>
				<li>
					<img src="../../assets/service/service3.png" class="service-img2">
					<h3>脸部补水祛斑精油</h3>
					<span>￥789</span>
					<span>月销201件</span>
				</li>
				<li>
					<img src="../../assets/service/service4.png" class="service-img2">
					<h3>脸部补水祛斑精油</h3>
					<span>￥789</span>
					<span>月销201件</span>
				</li>
				<li>
					<img src="../../assets/service/service5.png" class="service-img2">
					<h3>脸部补水祛斑精油</h3>
					<span>￥789</span>
					<span>月销201件</span>
				</li>
			</ul>
		</div>




		</div>


	</div>

	
</template>

<script type="text/javascript">
	
	export default {
		name:"service",
		data(){
			return {

			}
		}
	}
</script>

<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style type="text/css">
	.service-div1{
		display: flex;
		height: 105px;
		width: 100%;
		text-align: center;
		background-color: #FFF;
		padding-bottom: 15px;
	}
	.service-div1 img{
		width:22px;
		height:39px;
		margin-left: 42px;
		margin-top: 64px;
	}
	.service-div1 h1{
		font-size:36px;
		color:#333333;
		letter-spacing:0.58px;
		text-align:center;
		width: 390px;
		height: 50px;
		margin-top: 64px;
		margin-left: 116px;
	}
	.service-div2{
		height: 100%;
		background-color: #FFF;
	}
	.service-div2 h1 span{
		width: 128px;
		height: 45px;
		display: block;
		background-image: url(../../assets/index/bottomline.png);
		background-repeat: no-repeat;
		background-position: 0px 40px;
		background-size: 138px 10px;
		line-height: 45px;

	}
	.service-div2 h1{
		height: 72px;
		margin-left: 36px;
    	width: 100%-36px;
   		font-family:PingFangSC-Medium;
		font-size:32px;
		color:#333333;
		letter-spacing:-0px;
		line-height: 99px;	
		padding-top: 27px;
		
	}

	 .service-div2 .el-carousel__button{
	 	background-color:#333;
	 }

	/*  .el-carousel__item:nth-child(2n) {
	     background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	     background-color: #d3dce6;
	  }*/
	  .service-img1{
	  	margin-top: 18px;
	  	margin-left: 22px;
	  	width: 710px;
	  	height: 220px;
	  }
	  .service-div3{
	  	position: relative;
	  }
	  .service-div4{
	  	position: absolute;
	  	bottom: 39px;
	  	left: 48px;
	  	z-index: 100;

	  }
	  .service-div4 h2,.service-div4 span{
	  		  	color: #FFF;
	  }
	  .service-div4 h2{
	  	font-family:PingFangSC-Medium;
		font-size:28px;
		letter-spacing:-0px;

	  }
	  .service-div4 span{
	 	font-family:PingFangSC-Regular;
		font-size:22px;
		color:#ffffff;
		letter-spacing:-0px;

		}
		.service-div5{
			height: 100%;
			background-color: #FFF;
		}
		.service-img2{
			width: 346px;
			height: 190px;
		}
		.service-div6{
			height: 1119px;
			background-color: #FFF;
		}
		.service-div6 ul li{
			float: left;
			margin-top: 28px;
			margin-left: 20px;
			margin-bottom: 20px;
		}
		.service-div6 ul li h3{
			font-family:PingFangSC-Regular;
			font-size:28px;
			color:#333333;
			letter-spacing:-0px;
			line-height:50px;
			margin-left: 10px;
		}
		.service-div6 ul li span:nth-child(3){
			font-family:PingFangSC-Regular;
			font-size:24px;
			color:#fa4c01;
			letter-spacing:-0px;
			margin-right: 10px;
			margin-left: 10px
		}
		.service-div6 ul li span:nth-child(4){
			font-family:PingFangSC-Regular;
			font-size:22px;
			color:#999999;
			letter-spacing:-0px;

		}

</style>