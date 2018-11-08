<template>
	<div>
		<div class="top">
			<div class="title">购物车</div>
		</div>
		<div class="top-space"></div>
		<div class="all-goods-box">
			<div class="goods-title-box">
				<div class="choose"></div>
				<div class="goods-title">
					<span class="goods-title-name">膳食专区</span>
					<div class="goods-title-name-bottom-line"></div>
				</div>
			</div>
			<div class="goods-boxes" v-for="item in items">
				<div class="line"></div>
				<div class="goods-box" :id="item.id">
					<div class="choose" :class="{selected:item.isselected}" @click="selected"></div>
					<div class="goods-image">
						<div class="order" v-if="item.isOrder">已预约</div>
					</div>
					<div class="goods-info">
						<div class="goods-name">{{item.title}}</div>
						<div class="goods-desp">{{item.word1}}</div class="">
						<div class="goods-price-and-num">
							<div class="goods-price">￥<span class="bigger-font">{{item.price}}</span></div>
							<div class="goods-num">
								<div class="goods-num-decrease" @click="changeNum">-</div>
								<input class="goods-num-show" :value="item.num"/>
								<div class="goods-num-increase" @click="changeNum">+</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="recommend">
			<div class="recommend-title">智能推荐</div>
			<div class="line"></div>
			<div class="recommend-list">
				<div class="recommend-goods" v-for="item in items2">
					<div class="recommend-image"></div>
					<div class="recommend-name">{{item.name}}</div>
					<span class="recommend-price">￥<span class="bigger-font">{{item.price}}</span></span>
					<span class="recommend-sold">月销{{item.sold}}件</span>
				</div>
			</div>
		</div>
		<div class="bottom-space"></div>
		<div class="bottom">
			<div class="choose" :class="{selected:allChoose}" @click="toChooseAll"></div>
			<span class="choose-all">全选{{isAllChoose}}</span>
			<span class="total-price">合计：<span>￥<span class="bigger-font">{{totalPrice}}</span></span></span>
			<button class="pay">去结算({{totalNum}})</button>
		</div>
	</div>
</template>

<script type="text/javascript">
	mounted:{
		console.log("mounted");
	}
	export default {
		name:"shopcar",
		data(){
			return {
				allChoose:false,
				items:[{
					id:'1',
					image:'image',
					title:'title',
					word1:'word1',
					word2:'word2',
					price:'10',
					num:1,
					isOrder:false,
					isselected:false
				},{
					id:'2',
					image:'image',
					title:'title',
					word1:'word1',
					word2:'word2',
					price:'20',
					num:2,
					isOrder:false,
					isselected:true
				},{
					id:'3',
					image:'image',
					title:'title',
					word1:'word1',
					word2:'word2',
					price:'30',
					num:3,
					isOrder:true,
					isselected:false
				},{
					id:'4',
					image:'image',
					title:'title',
					word1:'word1',
					word2:'word2',
					price:'30',
					num:3,
					isOrder:false,
					isselected:false
				},{
					id:'5',
					image:'image',
					title:'title',
					word1:'word1',
					word2:'word2',
					price:'30',
					num:3,
					isOrder:true,
					isselected:false
				},{
					id:'6',
					image:'image',
					title:'title',
					word1:'word1',
					word2:'word2',
					price:'30',
					num:3,
					isOrder:false,
					isselected:false
				}],
				items2:[{
					id:'1',
					image:'image',
					name:'name',
					price:'2010',
					sold:'201'
				},{
					id:'2',
					image:'image',
					name:'name',
					price:'2020',
					sold:'202'
				},{
					id:'3',
					image:'image',
					name:'name',
					price:'2030',
					sold:'203'
				},{
					id:'4',
					image:'image',
					name:'name',
					price:'2040',
					sold:'204'
				},{
					id:'5',
					image:'image',
					name:'name',
					price:'2050',
					sold:'205'
				}]
			}
		},
		computed:{
			totalPrice(){
				var items=this.items;
				var total=0;
				for(var i=0;i<items.length;i++){
					if(items[i].isselected==true){
						total+=items[i].num*items[i].price;
					}
				}
				return total;
			},
			totalNum(){
				var items=this.items;
				var num=0;
				for(var i=0;i<items.length;i++){
					if(items[i].isselected==true){
						num++;
					}
				}
				return num;
			},
			isAllChoose(){
				var items=this.items;
				var flag=true;
				for(var i=0;i<items.length;i++){
					if(items[i].isselected==false){
						flag=false;
					}
				}
				this.allChoose=flag;
			}
		},
		watch:{
			
		},
		methods:{
			selected(element){
				var id=element.target.parentNode.getAttribute("id");
				var isselected=this.items.filter(function(a){
					return a.id==id;
				})[0].isselected;
				isselected=isselected==true?false:true;
				this.items.filter(function(a){
					return a.id==id;
				})[0].isselected=isselected;
			},
			handleChange(value) {},
      		toChooseAll(){
      			var flag=this.allChoose==true?false:true;
      			for(var i=0;i<this.items.length;i++){
      				this.items[i].isselected=flag;
      			}
      			this.allChoose=flag;
      		},
      		changeNum(element){
      			var compute=element.target;
      			var id=compute.parentNode.parentNode.parentNode.parentNode.getAttribute("id");
      			compute=compute.innerHTML=="+"?1:-1;
      			this.items.filter(function(a){
					return a.id==id;
				})[0].num+=compute;
      		}
		}
	}
</script>

<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style type="text/css" scoped>
	.top{
		width:750px;
		height:128px;
		background-color:#FFF;
		position:fixed;
		top:0;
		z-index:10;
	}
	.title{
		position:absolute;
		bottom:18px;
		left:50%;
		margin-left:-195px;
		height:50px;
		width:390px;
		line-height:50px;
		font-family:PingFangSC-Semibold;
		font-size:36px;
		color:#333333;
		letter-spacing:0.58px;
		text-align:center;
	}
	.all-goods-box{
		margin-top:20px;
		background-color:#FFF;
	}
	.goods-title-box{
		width:100%;
		height:72px;
		background-color:#FFF;
		display:flex;
		align-items:center;
	}
	.goods-title{
		margin-left:32px;
		font-family:PingFangSC-Medium;
		font-size:32px;
		color:#333333;
		text-align:left;
		width:128px;
		height:45px;
		line-height:45px;
		position:relative;
	}
	.goods-title-name{
		position:absolute;
		z-index:2;
	}
	.goods-title-name-bottom-line{
		background-image:linear-gradient(-270deg, #ffd556 0%, #fdab2b 100%);
		box-shadow:0 2px 8px 0 rgba(255,209,56,0.50);
		width:138px;
		height:10px;
		position:absolute;
		bottom:0;
		transform:skewX(30deg);
	}
	.goods-box{
		width:100%;
		height:250px;
		background-color:#FFF;
		position:relative;
		display:flex;
		flex-flow:row nowrap;
		align-items:center;
	}
	.goods-info{
		height:190px;
		margin-left:30px;
	}
	.goods-name{
		height:50px;
		line-height:50px;
		font-family:PingFangSC-Regular;
		font-size:30px;
		color:#333;
	}
	.goods-desp{
		height:33px;
		line-height:33px;
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999;
		margin-top:10px;
	}
	.goods-price-and-num{
		margin-top:43px;
		height:53px;
		display:flex;
		align-items:center;

	}
	.goods-price{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fa4c01;
	}
	.goods-num{
		position:absolute;
		right:30px;
		display:flex;
		align-items:center;
	}
	.goods-num-increase,
	.goods-num-decrease{
		background-image:linear-gradient(-270deg, #ffd556 0%, #fdab2b 100%);
		box-shadow:0 2px 8px 0 rgba(255,209,56,0.50);
		border-radius:23px;
		width:46px;
		height:46px;
		line-height:46px;
		text-align:center;
		font-size:17px;
		color:#FFF;
	}
	.goods-num-show{
		width:70px;
		text-align:center;
		font-size:24px;
		border:none;
	}
	.choose{
		height:33px;
		width:33px;
		border:1px solid #fdab2b;
		border-radius:100%;
		margin-left:30px;
	}
	.selected{
		background-image:linear-gradient(-270deg, #ffd556 0%, #fdab2b 100%);
		box-shadow:0 2px 8px 0 rgba(255,209,56,0.50);
		border:opacity(0);
	}
	.selected:after{
		content:'';
		height:18px;
		width:8px;
		display:block;
		margin-left:12px;
		margin-top:4px;
		border-right:3px solid #fff;
		border-bottom:3px solid #fff;
		transform:rotate(45deg);
	}
	.goods-image{
		width:190px;
		height:190px;
		background-color:#d8d8d8;
		border-radius:10px;
		margin-top:10px;
		margin-left:30px;
		position:relative;
		overflow:hidden;
	}
	.order{
		position:absolute;
		bottom:0;
		height:36px;
		width:190px;
		background:rgba(254,173,48,0.60);
		color:#FFF;
		font-family:PingFangSC-Regular;
		font-size:24px;
		line-height:36px;
		text-align:center;
	}
	.recommend{
		margin-top:20px;
		background-color:#FFF;
		padding-bottom:20px;
	}
	.recommend-title{
		text-align:center;
		color:#333;
		height:100px;
		line-height:100px;
		font-size:28px;
		font-family:PingFangSC-Regular;
	}
	.recommend-list{
		display:flex;
		flex-flow:row wrap;
		justify-content:space-between;
		padding:0 20px;
		margin:0 auto;
	}
	.recommend-image{
		width:346px;
		height:346px;
		background-color:#d8d8d8;
		border-radius:10px;
		margin-top:30px;
	}
	.recommend-name{
		height:50px;
		line-height:50px;
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#333333;
		margin:10px;
	}
	.recommend-price{
		height:45px;
		line-height:45px;
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fa4c01;
	}
	.recommend-sold{
		height:30px;
		line-height:30px;
		font-family:PingFangSC-Regular;
		font-size:22px;
		color:#999999;
		margin-left:10px;
	}
	.bottom{
		height:100px;
		width:750px;
		position:fixed;
		bottom:102px;
		display:flex;
		align-items:center;
		background-color:#FFF;
		z-index:10;
	}
	.choose-all{
		margin-left:13px;
		width:94px;
		height:33px;
		font-family:PingFangSC-Medium;
		font-size:24px;
		color:#333333;
	}
	.total-price{
		height:33px;
		line-height:33px;
		font-family:PingFangSC-Medium;
		font-size:24px;
		color:#333333;
	}
	.total-price span{
		font-family:PingFangSC-Regular;
		color:#fa4c01;
	}
	.pay{
		position:absolute;
		right:0;
		border:none;
		background-image:linear-gradient(-270deg, #ffd556 0%, #fdab2b 100%);
		width:260px;
		height:100px;
		color:#FFF;
		font-family:PingFangSC-Medium;
		font-size:34px;
	}
	.line{
		width:680px;
		height:1px;
		border:1px solid #eee;
		margin:0 auto;
	}
	.bigger-font{
		font-size:35px;
	}
	.total-price .bigger-font{
		position:absolute;
		margin-top:-3px;
	}
	.top-space{
		height:120px;
	}
	.bottom-space{
		height:220px;
	}
</style>