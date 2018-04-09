<template>
  <div id="hello">
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
      <el-submenu index="1">
        <template slot="title">畜牧业</template>
        <el-menu-item index="2-1">最新</el-menu-item>
        <el-menu-item index="2-2">最热</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">农资业</template>
        <el-menu-item index="2-1">最新</el-menu-item>
        <el-menu-item index="2-2">最热</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">农副加工</template>
        <el-menu-item index="2-1">最新</el-menu-item>
        <el-menu-item index="2-2">最热</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">鱼类业</template>
        <el-menu-item index="2-1">最新</el-menu-item>
        <el-menu-item index="2-2">最热</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="apart" style="float: left;padding-left: 20px;width: 20px;clear: both">
      <p style="font-size: 30px">
        <router-link to="/page2" class="router-link-active">农业知识竞赛</router-link>
      </p>
      <router-view></router-view>
    </div>
    <div style="float: left;margin-left: 100px">
      <el-row :gutter="40">
        <el-col :span="6">
          <div class="thumbnail">
            <img src="../assets/pangxie1.png" alt="..." class="img-responsive" style="height:180px;width: 250px">
            <div class="caption">
              <h5 @click="add()">{{tt}}</h5>
              <p class="num">{{nn}}</p>
              <img class="eyes" src="../assets/eye.png">
              <div style="clear: both">中华螃蟹“诺亚一号”</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="thumbnail">
            <img src="../assets/liyu1.png" alt="..." class="img-responsive" style="height:180px;width: 250px">
            <div class="caption">
              <h5>红鲤鱼养殖诀窍</h5>
              <p class="num">14</p>
              <img class="eyes" src="../assets/eye.png">
              <div style="clear: both">大规模养殖秘诀</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="thumbnail">
            <img src="../assets/liyu2.png" alt="..." class="img-responsive" style="height:180px;width: 250px">
            <div class="caption">
              <h5>鲤鱼养殖产业正在衰退？</h5>
              <p class="num">19</p>
              <img class="eyes" src="../assets/eye.png">
              <div style="clear: both">新品种鲤鱼上市</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="thumbnail">
            <img src="../assets/pangxie1.png" alt="..." class="img-responsive" style="height:180px;width: 250px">
            <div class="caption">
              <h5>南美白虾养殖技术摘要</h5>
              <p class="num">31</p>
              <img class="eyes" src="../assets/eye.png">
              <div style="clear: both">养殖条件概况</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6">
          <div class="thumbnail">
            <img src="../assets/xia2.png" alt="..." class="img-responsive" style="height:180px;width: 250px">
            <div class="caption">
              <h5>南美白虾养殖技术概要</h5>
              <p class="num">25</p>
              <img class="eyes" src="../assets/eye.png">
              <div style="clear: both">大规模养殖技巧</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="thumbnail">
            <img src="../assets/heiyu1.png" alt="..." class="img-responsive" style="height:180px;width: 250px">
            <div class="caption">
              <h5>黑鱼的养殖技术</h5>
              <p class="num">9</p>
              <img class="eyes" src="../assets/eye.png">
              <div style="clear: both">黑鱼饲料选取及投放</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="thumbnail">
            <img src="../assets/jiyu1.png" alt="..." class="img-responsive" style="height:180px;width: 250px">
            <div class="caption">
              <h5>鲫鱼养殖赤皮病的防治</h5>
              <p class="num">13</p>
              <img class="eyes" src="../assets/eye.png">
              <div style="clear: both">鲫鱼常见疾病防治</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="thumbnail">
            <img src="../assets/hexia1.png" alt="..." class="img-responsive" style="height:180px;width: 250px">
            <div class="caption">
              <h5>如何分辨野生虾和河虾</h5>
              <p class="num">22</p>
              <img class="eyes" src="../assets/eye.png">
              <div style="clear: both">使用一元硬币法分辨</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6">
          <div class="thumbnail">
            <img src="../assets/longxia1.png" alt="..." class="img-responsive" style="height:180px;width: 250px">
            <div class="caption">
              <h5>大龙虾养殖技术手册</h5>
              <p class="num">27</p>
              <img class="eyes" src="../assets/eye.png">
              <div style="clear: both">养殖技巧和秘诀</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="thumbnail">
            <img src="../assets/jiayu1.png" alt="..." class="img-responsive" style="height:180px;width: 250px">
            <div class="caption">
              <h5>甲鱼有害？</h5>
              <p class="num">16</p>
              <img class="eyes" src="../assets/eye.png">
              <div style="clear: both">正确的甲鱼养殖方法</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="thumbnail">
            <img src="../assets/shanyu1.png" alt="..." class="img-responsive" style="height:180px;width: 250px">
            <div class="caption">
              <h5>鳝鱼行业火爆？</h5>
              <p class="num">19</p>
              <img class="eyes" src="../assets/eye.png">
              <div style="clear: both">批量养殖鳝鱼</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="thumbnail">
            <img src="../assets/duixia1.png" alt="..." class="img-responsive" style="height:180px;width: 250px">
            <div class="caption">
              <h5>如何区分对虾和龙虾</h5>
              <p class="num">5</p>
              <img class="eyes" src="../assets/eye.png">
              <div style="clear: both">使用一元硬币法分辨</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :offset="8">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import ElContainer from "element-ui/packages/container/src/main";
  export default {
    components: {
      ElContainer
    },
    name: 'hello',
    data() {
      return {
        tt:"淡水中心成功培育新品种",
        nn:27,
        activeIndex: '1'
      }
    },
    methods:{
      add:function () {
        this.nn++;
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

  var documentHeight = 0;
  var topPadding = 15;
  $(document).ready(function() {
    setTimeout(function () {
      var offset = $(".apart").offset();
      documentHeight = $(document).height();
      $(window).scroll(function() {
        var sideBarHeight = $(".apart").height();
        if ($(window).scrollTop() > offset.top) {
          var newPosition = ($(window).scrollTop() - offset.top) + topPadding;
          var maxPosition = documentHeight - (sideBarHeight + 368);
          if (newPosition > maxPosition) {
            newPosition = maxPosition;
          }
          $(".apart").stop().animate({
            marginTop: newPosition
          });
        } else {
          $(".apart").stop().animate({
            marginTop: 0
          });
        };
      });
    },0);
  });

</script>

<style scoped>
  #tab_ul li a:link {
    color: darkgray;
    font-size: 15px;
  }

  .thumbnail {
    background-color: #f3f5f7;
    margin-top: 20px;
    outline: none;
    border-color: #f3f5f7;
  }

  h5 {
    font-weight: bold;
    float: left;
    text-align: left;
    margin-top: -5px;
    font-size: 15px;
  }

  .eyes {
    margin-top: -5px;
    display: block;
    float: right;
    margin-left: 20px;
  }

  .num {
    margin-top: -5px;
    display: block;
    float: right;
  }

  .item {
    margin-left: 80px;
  }

  .item ul {
    list-style: none;
  }

  .item li {
    float: left;
    width: 100px;
    font-weight: bold;
    color: black;
  }

  .item a {
    font-weight: bold;
    color: black;
  }

  .item1 {
    margin-left: 80px;
    clear: both;
    margin-top: 40px;
  }

  .item1 ul {
    list-style: none;
  }


  .item1 li {
    float: left;
    width: 100px;
  }
  .router-link-active {
    text-decoration: none;
  }

  caption{
    margin: 0px;
    padding: 0px;
  }

</style>
