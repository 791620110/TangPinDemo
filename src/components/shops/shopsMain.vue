<template class="container">

<!--  -->
<div>
	<div class="shopsMain">
<el-container>

		<img src="../../assets/2572BA30-55B9-4D30-A451-56A1AB6AC9C6@1x.png" class="top-back-img">

			<img src="../../assets/A327EA3F-5C4E-4335-A8F8-54FD1807650E@1x.png" class="icon-back">

			<div class="div-first ">
  				<img src="../../assets/service.png" class="shop-image">

  				<div class="shop-info">
	  				<span class="shop-name">深圳中天养生酒店</span>
	  				<div class="level-div">
	  					<span class="level-text">金牌店铺</span>	
	  				</div>
				</div>
  		</div>

		<div class="div-second">
		  		  <el-tabs v-model="activeName" @tab-click="handleClick" stretch=true  class="main-el-tabs">

				    <el-tab-pane label="首页" name="first" >
 						<div class="input-div">
				    		<div class="input-div-sec">
				    				 <img src="../../assets/fangdajing.png" class="search-img">
				    				<input type="text" placeholder="搜索" class="inputSearch" /> 
				    		</div>
				    	</div>


				    	<div class="djq-div">
				    		<div class="djq-first" v-for="o in 2" :key="o">
				    			<div class="djq-a">
				    				<span class="djq-a-span">30</span>
				    				<span class="djq-a-span-sec">元</span>
				    			</div>
				    			<div class="djq-b">
				    					<span class="djq-b-span">满500元立减</span>

				    			</div>
				    			<div class="djq-c">
				    					<span class="djq-c-span">立即领取</span>

				    			</div>
				    		</div>



				    	</div>

				    	<div class="active-div">
				    		
				   <router-link to="/shopsFoodList" tag="div">  

								  	<div class="item-box">
								  		<div class="item-box-sec">
									  		<img src="../../assets/shops/6DAA8888-E2BF-48F6-8AC0-D40BA8DF43CB@1x.png" class="line-bar-icon-phone">
									  		 <div class="item-box-third">
									  			<span class="item-box-text">联系卖家</span>
									  				<i class="el-icon-arrow-right el-icon--right  icon-next"></i>
								 			  </div>

								 	   	 </div>
                                      </div>
								  </router-link>  

								  <div class="item-box">
									<div class="item-box-sec">
								  		<img src="../../assets/shops/6C33B4AF-1578-4428-B3F0-6B5F2BF46730@1x.png" class="line-bar-icon-position">
  										<div class="item-box-third">
										    <span class="item-box-text">电话</span>
										    <i class="el-icon-arrow-right el-icon--right icon-next "></i>
										</div>				    
									</div>
								  </div>

							  <div class="item-box">
							  	<div class="item-box-sec">
								  	<img src="../../assets/shops/6C33B4AF-1578-4428-B3F0-6B5F2BF46730@1x.png" class="line-bar-icon-position">
								    <div class="item-box-third">
									<span class="item-box-text">广东省深圳市南山区星海大街88号深业上城</span>

								    	
								    <i class="el-icon-arrow-right el-icon--right icon-next "></i>

								</div>
							    </div>
							  </div> 


				    	</div>
				    	 


				    <div class="block">
				    	<div class="shops-recommend-div">

				    			 <h1><span>店铺推荐</span> </h1>
					   
					    <el-carousel height="150px">
					      <el-carousel-item v-for="item in 3" :key="item">
					        <!-- <h3>{{ item }}</h3> -->
					        <div class="shops-recommend">

					        	<div class="shops-recommend-first" v-for="item in 3"  :key="item" >
						        	<img src="../../assets/shops/0F9B72C5-F2CB-4CEB-A637-362CC9D8AC0C@1x.png">
						        	<div class="fir">
						        		养生小笼包
						        	</div>
						        	<div class="sec">
						        		<p class="p1">¥ 798</p>
						        		<p class="p2">月销201件</p>
						        	</div>
								</div>
					        </div>
					      </el-carousel-item>
					    </el-carousel>

					    </div>
					  </div>





					<div class="guess-like-div">
						<div class="guess-div-sec">
								 <h1><span>猜您喜欢</span> </h1><!--  <img src="../assets/index/point.png" class="index-img6"/> -->
							<ul>
								<li  v-for="o in 4" :key="o">
									<img src="../../assets/shops/980A5CB8-6D68-4628-B7F4-44F1CAD12FF2@1x.png" class="gusee-like-img" />
									<div class="fir">
						        		养生小笼包
						        	</div>
						        	<div class="sec">
						        		<p class="p1">¥ 798</p>
						        		<p class="p2">月销201件</p>
						        	</div>
								</li>
								
							</ul>
						</div>
					</div>





				    </el-tab-pane>


				    <el-tab-pane label="分类" name="second" >
				    	<div class="input-div">
				    		<div class="input-div-sec">
				    				 <img src="../../assets/fangdajing.png" class="search-img">
				    				<input type="text" placeholder="搜索" class="inputSearch" /> 
				    		</div>
				    	</div>
 				

				   <router-link to="/shopsFoodList" tag="div">  

								  	<div class="item-box">
								  			<span class="item-box-text">膳食类</span>
								      	<i class="el-icon-arrow-right el-icon--right  icon-next"></i>
								 	 </div>

								  </router-link>  

							  <div class="item-box">
							    <span class="item-box-text">服务类</span>
							    <i class="el-icon-arrow-right el-icon--right icon-next "></i>
							  </div>

							  <div class="item-box">
							    <span class="item-box-text">xx剋</span>
							    <i class="el-icon-arrow-right el-icon--right icon-next "></i>
							  </div> 
				    </el-tab-pane>

				  </el-tabs>
			</div>

  </el-container>
</div>
 </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style type="text/css" >
.shopsMain .container{
	background-color: #fff;
	height: 100%;
	width: 100%;
}
 .shopsMain .el-header {
    background-color: #B3C0D1;
    color: #fff;
    text-align: center;
    line-height: 120px;
    font-size: 40px;
  }

	.shopsMain .div-first{
		position: absolute;
		z-index: 10;
		/*top: 20px;
		left: 20px;*/
		margin-top: 216px;
		margin-left: 32px

	}
	.shopsMain .div-second{
		position: absolute;
		top: 300px;
		background-color: #fff;
		width: 100%;
		height: 100px;
		margin-top: 35px;
	}
	.shopsMain .img-header{
		width: 80px;
		width:80px;
	}
	.shopsMain .icon-back{
		position: absolute;
		color:#fdab2b;
		top: 68px;
		left: 42px;
		width:22px;
		height:39px;
	}
	.shopsMain .top-back-img{
		width: 100%;
		height: 344px;
width:750px;

	}
	.shopsMain .shop-image{
		width: 112px;
		height: 112px;
		float: left;
	}
	.shopsMain .shop-info{
		float: right;
		position: relative;
		margin-left: 30px;
		border-radius:4px;
	}
	.shopsMain .shop-name{
		font-family:PingFangSC-Semibold;
		font-size:34px;
		color:#ffffff;
		line-height:42px;
		text-align:left;
	}
	.shopsMain .level-div{
		margin-top: 10px;
		background-color: #fdab2b;
		width: 131px;
		border-radius: 16.5px;
		text-align: center;
		height: 33px;
		padding-bottom: 2px;
	}
	.shopsMain .level-text{
		font-family:PingFangSC-Semibold;
		font-size:24px;
		color:#ffffff;
		/*margin-bottom: 10px;*/
	}
/*	.shopsMain .input-search{

		height: 100px;
		width: 658px;
		border-radius: 32.5px;
		background:#ffffff;
		box-shadow:0 0 18px 0 rgba(0,0,0,0.50);
		position: absolute;
		top:62px;
		left: 46px;
		z-index: 10;
		font-family:PingFangSC-Regular;
		font-size:26px;
		color:#999999;
		letter-spacing:0;
		text-align:center;

	}*/

	.shopsMain .text {
    font-size: 14px;
  }

  .shopsMain .item {
    padding: 18px 0;
  }

  .shopsMain .icon-next{
  	color:#cccccc;
	width:16px;
	height:26px;
	right: 32px;
	position: absolute;
	/*margin-top: -25px;*/
  }

  .shopsMain .el-tabs__item{
  	height: 40px;
  }
  .shopsMain  .el-tabs__item .is-active{
  	color:#fdab2b;
  }
  .shopsMain .el-tabs__active-bar{
  	background-color: #fdab2b;
  	width: 64px!important;
  	margin-left: 136px;
  }

  .shopsMain .el-tabs__nav.is-stretch{
  	height: 88px;
  }

 .shopsMain  .el-tabs__item{
  		font-family:PingFangSC-Medium;
		font-size:32px;
		    line-height: 83px;
  }
 .shopsMain  .el-tabs__header{
  	margin:0px!important;
  }
.shopsMain .el-tabs__item.is-active{
	color: #fdab2b;
}


.shopsMain .input-div{
		padding-left: 24px;
		padding-right: 24px;
		height: 96px;
		background-color: #fff;
		vertical-align: middle;
    display: table-cell;
}
.shopsMain .input-div-sec{
		width:702px;
		height:60px;
		background:#f2f2f2;
		border-radius: 4px;
		vertical-align: middle;
    display: table-cell;
}

  	.shopsMain .inputSearch{
		background:#f2f2f2;
		z-index: 10;
		color:#999999;
		border: 0px;
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#999999;
		text-align:left;
		margin-left: 68px;

	}

.shopsMain .item-box{
	background:#ffffff;
width:750px;
height:100px;
margin-top: 10px;
padding-left: 45px;


/*padding-top: 30px;*/

}
.shopsMain .item-box-sec{
	padding-top: 30px;
}
.shopsMain .item-box-third{
	width: 314px;
	margin-left: 120px;
}
.shopsMain .item-box-text{
	font-family:PingFangSC-Regular;
font-size:24px;
color:#333333;
letter-spacing:0.58px;
text-align:left;
height: 48px;



}
/*.djq-div{
	display: inline;
}*/

.shopsMain .djq-first{
	background:#ffffff;
	border:2px solid #fdab2b;
	width:334px;
	height:215px;
	margin-top: 20px;
	float: left;
	text-align: center;

	margin-left: 27px;
}
/*.djq-first:nth-child(2n) {

	margin-left: : 20px;
}
.djq-first:nth-child(2n+1) {

	margin-left: 20px;
}*/


.shopsMain .djq-a-span{
	font-family:Arial-Black;
font-size:80px;
color:#fdab2b;
text-align:center;
margin-top: 4px;
}
.shopsMain .djq-a-span-sec{
	font-family:Arial-Black;
	font-size:30px;
	color:#fdab2b;
}


.shopsMain .djq-b-span{
	font-family:PingFangSC-Regular;
	font-size:30px;
	color:#666666;
	text-align:center;
}

.shopsMain .djq-b-span-sec{
	font-family:PingFangSC-Regular;
font-size:30px;
color:#666666;

}

.shopsMain .djq-c{
	border:1px solid #fdab2b;
	border-radius:21.5px;
	width:153px;
	height:41px;
	margin-left: 93px;
	margin-top: 13px;
}
.shopsMain .djq-c-span{
		font-family:PingFangSC-Semibold;
		font-size:26px;
		color:#fdab2b;
		text-align:center;
}
.shopsMain .active-div{
	margin-top: 260px;
}
.shopsMain .guess-like-div{
		background:#ffffff;
		width:100%;
		height:780px;
		margin-top: 20px;
}

   .shopsMain  .guess-div-sec li{
    	/*width: 346px;*/
    	float: left;
    	margin-left: 32px;
    }


    .shopsMain .guess-div-sec h1 span,.shops-recommend-div  h1 span{
		width: 128px;
		height: 45px;
		display: inline-block;
		/*background-image: url(../assets/index/bottomline.png);*/
		background-repeat: no-repeat;
		background-position: 0px 40px;
		background-size: 138px 10px;
		line-height: 45px;

	}
	.shopsMain .guess-div-sec h1,.shops-recommend-div h1{

		margin-left: 36px;
    	width: 100%-36px;
   		font-family:PingFangSC-Medium;
		font-size:32px;
		color:#333333;
		letter-spacing:-0px;
		line-height: 99px;	
	}
	.shopsMain .gusee-like-img{
	    	background:#f1f8ff;
			width:336px;
			height:308px;
	}


 .shopsMain  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .shopsMain .el-carousel__item:nth-child(2n) {
     background-color: #ffffff;
  }
  
  .shopsMain .el-carousel__item:nth-child(2n+1) {
     background-color: #ffffff;
  }
.shopsMain .shops-recommend{
	padding-left: 32px;
	background-color: #fff;
}
.shopsMain .shops-recommend-first{
	
	float: left;
	margin-left: 16px;
}
.shopsMain .shops-recommend-first img{

	border-radius:4px;
	width:218px;
	height:163px;
}

.shopsMain .fir{
font-family:PingFangSC-Medium;
font-size:30px;
color:#333333;
letter-spacing:0;
text-align:left;
margin-top: 15px;
}


.shopsMain .sec{
margin-top: 16px;
}


.shopsMain .sec .p1{
	font-family:PingFangSC-Regular;
	font-size:24px;
	color:#fa4c01;
	letter-spacing:-0px;
	text-align:left;
	float: left;
	margin-left: 6px;
}

.shopsMain .shops-recommend-first .sec .p2{
	font-family:PingFangSC-Regular;
	font-size:24px;
	color:#999999;
	letter-spacing:0;
	text-align:left;
	float: right;
}



.shopsMain .shops-recommend-div{
	background-color: #fff;
	margin-top: 10px;
}

.el-carousel__button{
	background-color: #fdab2b;
}

/*.el-carousel__indicator .active button{
	background-color: #fdab2b;
#e8e8e8
}*/

.search-img{
	width:28px;
	height:28px;
	position: absolute;
	margin-left:28px;
    margin-top: 5px;
}


.line-bar-icon-position{
	color:#000000;
	width:30px;
	height:39px;
	position: absolute;
	margin-left: 46px;
}

.line-bar-icon-phone{
	color:#000000;
	width:34px;
	height:34px;
	position: absolute;
	margin-left: 46px;
}
.el-carousel{
background:#ffffff;
width:750px;
height:436px;


}
.recommend-title{
font-family:PingFangSC-Medium;
font-size:32px;
color:#333333;
letter-spacing:-0px;
text-align:left;
margin-top: 24px;

}

/*.shops-recommend-div div{
	width: 128px;
	height: 45px;
	margin-top: 24px;
}*/
  </style>