<template>
	<div>
		<div class="staydetail-div1">
			<img src="../../assets/index/back.png">
			<img src="../../assets/service/shoucang.png" class="right">
			<img src="../../assets/service/fenxiang.png" class="right">
			
		</div>

		<div class="staydetail-div2">
			 <el-carousel indicator-position="none" height="4.133333rem">
			    <el-carousel-item v-for="item in 4" :key="item">
			     <img src="../../assets/stay/house.png" class="staydetail-img1">
			    </el-carousel-item>
			 </el-carousel>
		</div>

		<div class="staydetail-div3">
			<h1>北京福地凰城酒店</h1>
			<p>广东省深圳市南山区星海大街88号深业上城<span><img src="../../assets/back1.png"></span></p>
			<h4></h4>

		</div>

		<div class="staydetail-div4">
				<h1 class=""><p>5.0</p><p>超出预期</p></h1>
				<div class="staydetail-div5">
					<p>评论(120)</p>
					<span>服务不错(30)</span>
					<span>非常干净(30)</span>
				</div>
				<span class="staydetail-span1"><img src="../../assets/back1.png"></span>
		</div>

	
		<div class="staydetail-div6">
			<ul>
				<li><img src="../../assets/stay/dianpu.png"></li>
				<li>店铺名称</li>
			</ul>
			<span><img src="../../assets/back1.png"></span>
		</div>

		<div class="staydetail-div6">
			 <ul>
				<li><img src="../../assets/stay/rili.png"></li>
				<li>到店时间</li>
			</ul>
<!-- 			<div class="block">
			    <span class="demonstration">默认</span>
			    <el-date-picker
			      v-model="value1"
			      type="datetime"
			      placeholder="选择日期时间">
			    </el-date-picker>
			 </div> -->
			<span><img src="../../assets/back1.png"></span> 
		</div>


		<div class="staydetail-div7">
			<span>大床房</span>
			<span>标准间</span>
			<span>筛选</span>
		</div>
		<div class="staydetail-div8">
			<el-collapse @change="handleChange">
			  <el-collapse-item name="1">
			  	    <template slot="title">
				     <div class="staydetail-div9">
				     	<ul>
				     		<li>
				     			<img src="../../assets/stay/house1.png">
				     			<div>
				     				<h1>标准大床房</h1>
				     				<h2><span>25平米</span> <span>大床1.8米</span> <span>有窗</span></h2>
				     				<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
				     			</div>
				     			<p>
				     				<span>￥603 <span>起</span></span>
				     				
				     				<img src="../../assets/stay/bottom.png">
				     			</p>

				     		</li>
				     	</ul>
				     </div>
				    </template>
			   		<div class="staydetail-div10">
				   		<ul>
				   			<li>
				   				<div class="staydetail-div10-div1">
					   				<h1>大床 无早 不可取消</h1>
					   				<h2>25平米 大床1.8米</h2>
									<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
								</div>
								<div class="staydetail-div10-div2">
									<h1>￥603</h1>
									<h2>￥899</h2>
									<h3>优惠已减￥19</h3>
								</div>
								<div class="staydetail-div10-div3">
									<el-row>
									 <el-button class="staydetail-button1">预定</el-button>
									</el-row>
								</div>
				   			</li>
				   		</ul>
			   		</div>	<div class="staydetail-div10">
				   		<ul>
				   			<li>
				   				<div class="staydetail-div10-div1">
					   				<h1>大床 无早 不可取消</h1>
					   				<h2>25平米 大床1.8米</h2>
									<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
								</div>
								<div class="staydetail-div10-div2">
									<h1>￥603</h1>
									<h2>￥899</h2>
									<h3>优惠已减￥19</h3>
								</div>
								<div class="staydetail-div10-div3">
									<el-row>
									 <el-button class="staydetail-button1">预定</el-button>
									</el-row>
								</div>
				   			</li>
				   		</ul>
			   		</div>	<div class="staydetail-div10">
				   		<ul>
				   			<li>
				   				<div class="staydetail-div10-div1">
					   				<h1>大床 无早 不可取消</h1>
					   				<h2>25平米 大床1.8米</h2>
									<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
								</div>
								<div class="staydetail-div10-div2">
									<h1>￥603</h1>
									<h2>￥899</h2>
									<h3>优惠已减￥19</h3>
								</div>
								<div class="staydetail-div10-div3">
									<el-row>
									 <el-button class="staydetail-button1">预定</el-button>
									</el-row>
								</div>
				   			</li>
				   		</ul>
			   		</div>
			  </el-collapse-item>
			 
			</el-collapse>
		</div>
		<div class="staydetail-div8">
			<el-collapse @change="handleChange">
			  <el-collapse-item name="1">
			  	    <template slot="title">
				     <div class="staydetail-div9">
				     	<ul>
				     		<li>
				     			<img src="../../assets/stay/house1.png">
				     			<div>
				     				<h1>标准大床房</h1>
				     				<h2><span>25平米</span> <span>大床1.8米</span> <span>有窗</span></h2>
				     				<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
				     			</div>
				     			<p>
				     				<span>￥603 <span>起</span></span>
				     				
				     				<img src="../../assets/stay/bottom.png">
				     			</p>

				     		</li>
				     	</ul>
				     </div>
				    </template>
			   		<div class="staydetail-div10">
				   		<ul>
				   			<li>
				   				<div class="staydetail-div10-div1">
					   				<h1>大床 无早 不可取消</h1>
					   				<h2>25平米 大床1.8米</h2>
									<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
								</div>
								<div class="staydetail-div10-div2">
									<h1>￥603</h1>
									<h2>￥899</h2>
									<h3>优惠已减￥19</h3>
								</div>
								<div class="staydetail-div10-div3">
									<el-row>
									 <el-button class="staydetail-button1">预定</el-button>
									</el-row>
								</div>
				   			</li>
				   		</ul>
			   		</div>	<div class="staydetail-div10">
				   		<ul>
				   			<li>
				   				<div class="staydetail-div10-div1">
					   				<h1>大床 无早 不可取消</h1>
					   				<h2>25平米 大床1.8米</h2>
									<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
								</div>
								<div class="staydetail-div10-div2">
									<h1>￥603</h1>
									<h2>￥899</h2>
									<h3>优惠已减￥19</h3>
								</div>
								<div class="staydetail-div10-div3">
									<el-row>
									 <el-button class="staydetail-button1">预定</el-button>
									</el-row>
								</div>
				   			</li>
				   		</ul>
			   		</div>	<div class="staydetail-div10">
				   		<ul>
				   			<li>
				   				<div class="staydetail-div10-div1">
					   				<h1>大床 无早 不可取消</h1>
					   				<h2>25平米 大床1.8米</h2>
									<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
								</div>
								<div class="staydetail-div10-div2">
									<h1>￥603</h1>
									<h2>￥899</h2>
									<h3>优惠已减￥19</h3>
								</div>
								<div class="staydetail-div10-div3">
									<el-row>
									 <el-button class="staydetail-button1">预定</el-button>
									</el-row>
								</div>
				   			</li>
				   		</ul>
			   		</div>
			  </el-collapse-item>
			 
			</el-collapse>
		</div>
		<div class="staydetail-div8">
			<el-collapse @change="handleChange">
			  <el-collapse-item name="1">
			  	    <template slot="title">
				     <div class="staydetail-div9">
				     	<ul>
				     		<li>
				     			<img src="../../assets/stay/house1.png">
				     			<div>
				     				<h1>标准大床房</h1>
				     				<h2><span>25平米</span> <span>大床1.8米</span> <span>有窗</span></h2>
				     				<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
				     			</div>
				     			<p>
				     				<span>￥603 <span>起</span></span>
				     				
				     				<img src="../../assets/stay/bottom.png">
				     			</p>

				     		</li>
				     	</ul>
				     </div>
				    </template>
			   		<div class="staydetail-div10">
				   		<ul>
				   			<li>
				   				<div class="staydetail-div10-div1">
					   				<h1>大床 无早 不可取消</h1>
					   				<h2>25平米 大床1.8米</h2>
									<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
								</div>
								<div class="staydetail-div10-div2">
									<h1>￥603</h1>
									<h2>￥899</h2>
									<h3>优惠已减￥19</h3>
								</div>
								<div class="staydetail-div10-div3">
									<el-row>
									 <el-button class="staydetail-button1">预定</el-button>
									</el-row>
								</div>
				   			</li>
				   		</ul>
			   		</div>	<div class="staydetail-div10">
				   		<ul>
				   			<li>
				   				<div class="staydetail-div10-div1">
					   				<h1>大床 无早 不可取消</h1>
					   				<h2>25平米 大床1.8米</h2>
									<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
								</div>
								<div class="staydetail-div10-div2">
									<h1>￥603</h1>
									<h2>￥899</h2>
									<h3>优惠已减￥19</h3>
								</div>
								<div class="staydetail-div10-div3">
									<el-row>
									 <el-button class="staydetail-button1">预定</el-button>
									</el-row>
								</div>
				   			</li>
				   		</ul>
			   		</div>	<div class="staydetail-div10">
				   		<ul>
				   			<li>
				   				<div class="staydetail-div10-div1">
					   				<h1>大床 无早 不可取消</h1>
					   				<h2>25平米 大床1.8米</h2>
									<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
								</div>
								<div class="staydetail-div10-div2">
									<h1>￥603</h1>
									<h2>￥899</h2>
									<h3>优惠已减￥19</h3>
								</div>
								<div class="staydetail-div10-div3">
									<el-row>
									 <el-button class="staydetail-button1">预定</el-button>
									</el-row>
								</div>
				   			</li>
				   		</ul>
			   		</div>
			  </el-collapse-item>
			 
			</el-collapse>
		</div>


	</div>
</template>

<script type="text/javascript">
	
	export default {
		name:"staydetail",
		data(){
			return {
				
			}
		},
		 methods: {
	      handleChange(val) {
	        console.log(val);
	      	}
   		 }
	}

</script>

<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style type="text/css">

	.staydetail-div1{
		display: flex;
		height: 120px;
		width: 100%;
		text-align: center;
		background-color: #FFF;
	}

	.staydetail-div1 img:nth-child(1){
		width:22px;
		height:39px;
		margin-left: 42px;
		margin-top: 64px;
	}
	.staydetail-div1 img:nth-child(2){
		width:39px;
		height:34px;
		position: absolute;
		top: 70px;
		right: 124px;
	}		
	.staydetail-div1 img:nth-child(3){
		width:34px;
		height:34px;
		position: absolute;
		top: 70px;
		right: 39px;
	}	
	.staydetail-div2{
		background-color: #FFF;
		padding-top: 40px;
	}
	 .staydetail-div2 .el-carousel__item h3 {
	    color: #475669;
	    font-size: 18px;
	    opacity: 0.75;
	    line-height: 300px;
	    margin: 0;
	}
	  
	
	.staydetail-img1{
		width:660px;
		height: 310px;
		margin-left:40px;
	}
	.staydetail-div3{
		background-color: #FFF;
		padding-left: 40px;
		padding-top: 30px;
	}
	.staydetail-div3 h1{
		font-family:PingFangSC-Medium;
		font-size:36px;
		color:#333333;

	}
	.staydetail-div3 p{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#666666;
		margin-top: 30px;
		padding-left: 50px;
		background-image: url(../../assets/stay/map.png);
		background-repeat: no-repeat;
		background-position: 15px 10px;
		background-size: 24px 31px;
	}
	.staydetail-div3 p span{
		color: #000;
		font-size: 35px;


	}
	.staydetail-div3 p span img{
		width:14px;
		height:25px;
		display: inline-block;
		margin-left: 45px;
	}
	.staydetail-div3 h4{
		width: 689px;
		height: 1px;
		background-color: #eee;
		margin-top: 22px;
	}
	.staydetail-div4{
		display: flex;
		padding-left: 41px;
		padding-top: 21px;
		background-color: #FFF;
		justify-content: center;
		height: 145px;
		margin-bottom: 15px;

	}
	.staydetail-div4 h1{
		width: 130px;
		height: 116px;
		text-align: center;



	}

	.staydetail-div4 h1 p:nth-child(1){
		font-family:Arial-BoldMT;
		font-size:48px;
		color:#ffffff;
		letter-spacing:0.17px;
		background-image: url(../../assets/stay/bg.png);
		height: 64px;
		line-height: 64px;
		width: 130px;

	}
	.staydetail-div4 h1 p:nth-child(2){
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fdab2b;
		letter-spacing:0.09px;	
		height: 52px;
		line-height: 52px;
		background:#fffaf0;
		width: 130px;

	}
	.staydetail-div5{
		margin-left: 30px;
			width: 440px;

		
	}
	.staydetail-div5 p{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#333333;
		letter-spacing:0.1px;
	}
	.staydetail-div5 span{
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
		margin-top: 30px;
		margin-right: 10px;
	}
	.staydetail-span1{
		color: #000;
		font-size: 35px;
		margin-left: 10px;
		display: block;
		width: 50px;
		line-height: 58px;
		height: 58px;
		margin-top: 15px;
	}
	.staydetail-span1 img{
		width:14px;
		height:25px;
		margin-top:30px;
	}
	.staydetail-div6{
		height: 66px;
		background-color: #FFF;
		display: flex;
		padding-top: 34px;
		margin-bottom: 15px;	
	}
	.staydetail-div6 ul{
		width: 510px;
		height:66px;
	}
	.staydetail-div6 ul li:nth-child(1){
		width:54px;
		height:31px;
		display: inline-block;
		line-height: 100px;
		margin-left: 44px;
		border-right: 1px solid #eee;

	}
	.staydetail-div6 ul li:nth-child(1) img{
		width: 29px;
		height: 31px;
	}
	.staydetail-div6 ul li:nth-child(2){
		width: 113px;
		display: inline-block;
		vertical-align: top;
		margin-left: 19px;
	}
	.staydetail-div6 span img{
		width:14px;
		height:25px;
		margin-left: 160px;
	}

	.staydetail-div7{
		height: 110px;
		background-color: #FFF;
		border-bottom: 1px solid #eee;

	}
	.staydetail-div8 .el-collapse-item__header{
		height: 190px;
	}
	.staydetail-div9{

	}
	.staydetail-div9 ul li{
		display: flex;
		padding-top: 30px;
		padding-left:40px;
	}
	.staydetail-div9 ul li div{
		width: 390px;

	}
	.staydetail-div9 ul li div h1{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#333333;
		letter-spacing:-0px;
	}

	.staydetail-div9 ul li div h2{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		letter-spacing:-0px;
	}
	.staydetail-div9 ul li div h3 span:nth-child(1){
		border:1px solid #fa4c01;
		border-radius:3px;
		width:50px;
		height:23px;
		font-family:PingFangSC-Regular;
		font-size:20px;
		color:#fa4c01;
		letter-spacing:0.09px;
		margin-right: 5px;
	}
	.staydetail-div9 ul li div h3 span:nth-child(2){
		border:1px solid #fa4c01;
		border-radius:3px;
		width:91px;
		height:23px;
		font-family:PingFangSC-Regular;
		font-size:20px;
		color:#fa4c01;
		letter-spacing:0.09px;
	}
	
	.staydetail-div9 ul li img{
		width: 130px;
		height: 130px;
		margin-right: 20px;
	}
	.staydetail-div9 ul li p{
		height: 53px;
		margin-top: 30px;
		color: #999
	}
	.staydetail-div9 ul li p img{
		width: 24px;
		height: 24px;
		display: inline-block;
		margin-right: 0;

	}
	.staydetail-div9 ul li p span{
		font-size: 30px;
		color:#fa4c01;
		letter-spacing:0.09px;
		font-family:PingFangSC-Regular;

		margin-right: 5px;

	}
	.staydetail-div9 ul li p span span{
		font-size: 20px;
		color: #999

	}
	.staydetail-div8 .el-collapse-item__header{
		font-size: 0;
	}
	.staydetail-button1{
		background:#fa4c01;
		border-radius:4px;
		width:91px;
		height:52px;
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#ffffff;
		letter-spacing:0.12px;
		text-align: center;
		padding:0;
		margin-top: 34px;
		margin-left: 48px;

	}
	.staydetail-button1 .el-button:focus, .el-button:hover{
		color: #ffffff; 
     	background-color: #fa4c01;
	}

	.staydetail-div10 li{
		padding-top: 30px;
		padding-left: 40px;
		background-color: #eee;
		display: flex;
		height: 150px;
		border-bottom: 1px solid #CCC;
	}
	.staydetail-div10-div1 h1{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#333333;
		letter-spacing:-0px;
		font-weight: 500
	}
	.staydetail-div10-div1 h2{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		letter-spacing:-0px;
		font-weight: 500
	}
	.staydetail-div10-div1 h3 span:nth-child(1){
		border:1px solid #fa4c01;
		border-radius:3px;
		width:50px;
		height:23px;
		font-family:PingFangSC-Regular;
		font-size:20px;
		color:#fa4c01;
		letter-spacing:0.09px;
		margin-right: 5px;
	}
	.staydetail-div10-div1 h3 span:nth-child(2){
		border:1px solid #fa4c01;
		border-radius:3px;
		width:91px;
		height:23px;
		font-family:PingFangSC-Regular;
		font-size:20px;
		color:#fa4c01;
		letter-spacing:0.09px;
	}
	.staydetail-div10-div1{
		width: 350px;
		height: 110px;
		border-right: 1px solid #CCC;
		margin-right: 37px;
	}
	.staydetail-div10-div2{
		width: 140px;
		height: 110px;
		text-align: right;
	}


	.staydetail-div10-div2 h1{
		font-family:PingFangSC-Regular;
		font-size:30px;
		color:#fa4c01;
		letter-spacing:0.09px;
		font-weight: 500;
	}
	.staydetail-div10-div2 h3{
		font-family:PingFangSC-Regular;
		font-size:22px;
		color:#fa4c01;
		letter-spacing:0.09px;
		text-align: left;
		font-weight: 500;
	}
	.staydetail-div10-div2 h2{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		letter-spacing:0.1px;
		font-weight: 500;
	}

</style>