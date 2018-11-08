<template>

<div>
  
  <div class="shop">

<el-container>
  <el-header class="header-content">


    <p class="header-text">商铺</p>
</el-header>

  <el-tabs v-model="activeName" @tab-click="handleClick" class="tab-header" stretch=true >
      <el-tab-pane  label="全部" name="first">
      
      <div v-for="o in 4" :key="o" class="text item">

          <el-card class="box-card">
                 <li class="img-li">
                    <router-link to="/shopsMain" tag="li">
                      <img src="../../assets/2572BA30-55B9-4D30-A451-56A1AB6AC9C6@1x.png" class="box-img" />
                    </router-link>  
                  <div class="box-text">
                    <h2 class="box-text-h2">深圳中天养生酒店</h2>
                      <img src="../../assets/9E92EBA5-E4A8-4BB6-8D2F-FAB1678BEBF1@1x.png" class="position-icon">
                          <p class="box-text-p1">广东省深圳市南山区星海大街88号深业上城</p>
                          <p class="box-text-p2">酒店位置市内，二环内，离天安门2-3公里。在钱粮胡同中间。酒店门口左拐300米就有吃饭的地方</p>
                  </div>
                    
                 </li>
            
          </el-card>
      </div>


    </el-tab-pane>

      <el-tab-pane  label="膳食类" name="second">
      
       <div v-for="o in 1" :key="o" class="text item">

         
           <el-card class="box-card">
                 <li class="img-li">
                    <router-link to="/shopsMain" tag="li">
                      <img src="../../assets/2572BA30-55B9-4D30-A451-56A1AB6AC9C6@1x.png" class="box-img" />
                    </router-link>  
                  <div class="box-text">
                    <h2 class="box-text-h2">深圳中天养生酒店</h2>
                      <img src="../../assets/9E92EBA5-E4A8-4BB6-8D2F-FAB1678BEBF1@1x.png" class="position-icon">
                          <p class="box-text-p1">广东省深圳市南山区星海大街88号深业上城</p>
                          <p class="box-text-p2">酒店位置市内，二环内，离天安门2-3公里。在钱粮胡同中间。酒店门口左拐300米就有吃饭的地方</p>
                  </div>
                    
                 </li>
            
          </el-card>
      </div>

    </el-tab-pane>

      <el-tab-pane label="住宿类" name="third">

        <div v-for="o in 1" :key="o" class="text item">

         
              <el-card class="box-card">
                 <li class="img-li">
                    <router-link to="/shopsMain" tag="li">
                      <img src="../../assets/2572BA30-55B9-4D30-A451-56A1AB6AC9C6@1x.png" class="box-img" />
                    </router-link>  
                  <div class="box-text">
                    <h2 class="box-text-h2">深圳中天养生酒店</h2>
                      <img src="../../assets/9E92EBA5-E4A8-4BB6-8D2F-FAB1678BEBF1@1x.png" class="position-icon">
                          <p class="box-text-p1">广东省深圳市南山区星海大街88号深业上城</p>
                          <p class="box-text-p2">酒店位置市内，二环内，离天安门2-3公里。在钱粮胡同中间。酒店门口左拐300米就有吃饭的地方</p>
                  </div>
                    
                 </li>
            
          </el-card>
      </div>
      
    </el-tab-pane>

      <el-tab-pane label="服务类" name="fourth" >

        <div v-for="o in 1" :key="o" class="text item">


            <el-card class="box-card">
                 <li class="img-li">
                    <router-link to="/shopsMain" tag="li">
                      <img src="../../assets/2572BA30-55B9-4D30-A451-56A1AB6AC9C6@1x.png" class="box-img" />
                    </router-link>  
                  <div class="box-text">
                    <h2 class="box-text-h2">深圳中天养生酒店</h2>
                      <img src="../../assets/9E92EBA5-E4A8-4BB6-8D2F-FAB1678BEBF1@1x.png" class="position-icon">
                          <p class="box-text-p1">广东省深圳市南山区星海大街88号深业上城</p>
                          <p class="box-text-p2">酒店位置市内，二环内，离天安门2-3公里。在钱粮胡同中间。酒店门口左拐300米就有吃饭的地方</p>
                  </div>
                    
                 </li>
            
          </el-card>
        


      </div>
      
    </el-tab-pane>
  </el-tabs>
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
 .shop .header-content {
    background-color: #fff;
    text-align: center;
    line-height: 120px;
    height: 128px!important;
    position: fixed;
    width: 100%;
    z-index: 10;
    border-bottom: 5px solid whitesmoke;

  }


  .shop .header-text{
   font-family:PingFangSC-Semibold;
    font-size:36px;
    color:#333333;
    letter-spacing:0.58px;
  }
  .shop .el-tabs{
    background-color: #fff;
  
  }
  .shop .el-tab-pane{
    background-color: #fff;
    flex: 1;
    font-size:20px;
    width: 100%;
        /*margin-top: 20px;*/
  }
.shop .el-tabs__item{


    line-height: 83px;
    font-family:PingFangSC-Semibold;
    font-size:32px;
    color:#333333;
    text-align:center;


}
.shop .box-img{
  margin-bottom: 30px;
  background:#e0e0e0;
  width:686px;
  height:360px;
  border-top-left-radius: 10px;
   border-top-right-radius: 10px;
}
.shop li{

list-style:none;
}
.shop el-card{
  text-align: center;
}
.shop .el-tabs__nav{
    width: 100%!important;
    height: 40px;
    position: absolute;
}

.shop .tab-header{
  width: 100%;
  margin-top: 128px;
  margin-bottom:100px;
}
 .shop .div4{
      width: 100%;
      height: 907px;
      background-color: #FFF; 
      margin-bottom: 20px;

    }
.shop .el-tabs__nav.is-stretch{
    height: 87px;
    position: fixed;
    width: 100%;
     line-height: 43px;
   background-color: #fff;

}
.shop .el-tabs__content{
  margin-top: 87px
}

.shop .el-tabs__item:hover{
  color: #fdab2b;
}
.shop .el-tabs__active-bar{
      background-color: #fdab2b;
}
.shop .el-tabs__item.is-active{
   color: #fdab2b;
}
.shop .el-card__body{
  background-color:#eee;
  padding-left: 32px;
  padding-right: 32px;

}
.shop .img-li{
  background-color: #fff;
  border-radius: 10px;
}
.shop .box-text{
  padding-left: 35px;
  padding-bottom: 30px;
}
.shop .box-text-h2{
  font-family:PingFangSC-Semibold;
  font-size:34px;
  color:#333333;
}
.shop .box-text-p1{
  font-family:PingFangSC-Regular;
  font-size:28px;
  color:#666666;
  margin-top: 12px;
  margin-left: 35px;
}
.shop .box-text-p2{
  font-family:PingFangSC-Regular;
  font-size:24px;
  color:#999999;
  margin-top: 25px;
}
.shop .position-icon{
  width:24px;
  height:31px;
  position: absolute;
  margin-top:20px;
}
</style>