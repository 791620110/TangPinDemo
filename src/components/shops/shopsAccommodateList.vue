<template class="container">

<!--  -->

<el-container>
  <el-header class="header-content">
  	<i class="el-icon-arrow-left el-icon--right"></i>
  	<input type="text" placeholder="搜索你需要的商品热门关键词" class="inputSearch" />


  </el-header>

<div class="menu-div">

		<el-dropdown>
		  <el-button type="primary">
		    默认<i class="el-icon-arrow-down el-icon--right"></i>
		  </el-button>
		  <el-dropdown-menu slot="dropdown">
		    <el-dropdown-item>从高到低</el-dropdown-item>
		    <el-dropdown-item>从低到高</el-dropdown-item>
		  </el-dropdown-menu>
		</el-dropdown>

		<el-dropdown>
		  <el-button type="primary">
		    价格<i class="el-icon-arrow-down el-icon--right"></i>
		  </el-button>
		  <el-dropdown-menu slot="dropdown">
		    <el-dropdown-item>从高到低</el-dropdown-item>
		    <el-dropdown-item>从低到高</el-dropdown-item>
		  </el-dropdown-menu>
		</el-dropdown>


		<el-dropdown>
		  <el-button type="primary">
		    销量<i class="el-icon-arrow-down el-icon--right"></i>
		  </el-button>
		  <el-dropdown-menu slot="dropdown">
		     <el-dropdown-item>从高到低</el-dropdown-item>
		    <el-dropdown-item>从低到高</el-dropdown-item>
		  </el-dropdown-menu>
		</el-dropdown>

		<el-dropdown>
		  <el-button type="primary">
		    评价<i class="el-icon-arrow-down el-icon--right"></i>
		  </el-button>
		  <el-dropdown-menu slot="dropdown">
		     <el-dropdown-item>从高到低</el-dropdown-item>
		    <el-dropdown-item>从低到高</el-dropdown-item>
		  </el-dropdown-menu>
		</el-dropdown>

		<div class="vertical-line"></div>

		 <div style="margin-top: 20px;float:right">
		    <el-checkbox-group v-model="checkboxGroup3" size="small">
		      <el-checkbox-button >筛选</el-checkbox-button>
		    </el-checkbox-group>
  		</div>

</div>

<div class="foos-list-div">

			
					<ul  v-for="o in 3" :key="o" >
						<li>
							<img src="../../assets/foods1.png" />
							<h2>酒店名称</h2>
							<p>描述：豪华实拍，大床房....</p>
							<span>￥398</span>
							<span>月销12件</span>

						</li>
						
					</ul>
			
			</div>







  </el-container>

 
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        
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
<style type="text/css" scoped>
.container{
	background-color: #fff;
	height: 100%;
	width: 100%;
}
 .el-header {
    background-color: #B3C0D1;
    color: #fff;
    text-align: center;
    line-height: 120px;
    font-size: 40px;
   /* height: 45px!important;*/
  }
  	.inputSearch{
		height: 65px;
		width: 558px;
		background:#ffffff;
		left: 46px;
		z-index: 10;
		font-family:PingFangSC-Regular;
		font-size:26px;
		color:#999999;
		letter-spacing:0;
		text-align:center;
		float: right;
		margin-top: 20px
	}
	.el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .menu-div{
  		background-color: #fff;
  		height: 100px;

  }
  .vertical-line{
  	background-color: grey;
  	width: 2px;
  	height: 80px;
  	position: absolute;
  	right: 100px;
  }
  .main-list-div{

  		width: 100%;
    	height: 907px;
    	background-color: #FFF;	
    	margin-bottom: 20px;
  }

    .foos-list-div{
    	width: 100%;
    	height: 907px;
    	background-color: #FFF;	
    	margin-bottom: 20px;

    }

 .foos-list-div li{
    	border-top: 1px solid #CCC;
    	padding-top: 28px;
    	height: 250px;
    	padding: 15px 0 15px 20px;
    }

     .foos-list-div h2{
    	font-family:PingFangSC-Regular;
		font-size:30px;
		color:#333333;
		letter-spacing:-0px;
		height: 50px;
		line-height: 50px;  

    }
      .foos-list-div span:nth-child(3){
    	font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fa4c01;
		letter-spacing:-0px;
		height: 53px;
		line-height: 53px;
		display: inline-block;
    }
    .foos-list-div span:nth-child(4){
    	font-family:PingFangSC-Regular;
		font-size:22px;
		color:#999999;
		letter-spacing:-0px;
		margin-left: 20px;
    }
    .foos-list-div ul p{  
    	height: 80px;
    	font-family:PingFangSC-Regular;
		font-size:24px;
		color:#666666;
		letter-spacing:-0px;
		line-height:0px;	
    }

    .foos-list-div img{
    	border-radius:10px;
		width:190px;
		height:190px;
		float: left;

    }
  </style>