<template xmlns:v-popover="http://www.w3.org/1999/xhtml">
  <div id="page4">
    <!--左边栏-->
    <div class="container">
      <!--小导航条-->
      <div id="banner">
        <div class="c1">
          <img src="../assets/手指.png" alt="">
          <router-link to="/">发布任务</router-link>
        </div>
        <div class="c1">
          <a href="#"><img src="../assets/灯泡.png" alt="">回答</a>
        </div>
        <div class="c1">
          <a href="#"><img src="../assets/科研项目.png" alt="">科研立项</a>
        </div>
        <div id="c4">
          <img src="" alt="">
          <a href="#">企业发布</a>
        </div>
        <router-view></router-view>
      </div>
      <!--左侧下方内容模块-->
      <div class="box">
        <div class="personMessages">
          <img src="../assets/head.jpg" alt="" class="img-circle head2">
          <div class="Name">
            <a class="personName">张伟卫</a>
            <span class="time">2018.3.14</span>
          </div>
          <span class="questionSpan">西瓜</span>
        </div>
        <div class="questionDescript">
          <router-link to="/imageDemo5" class="questionTitle"><b>种植西瓜，发现西瓜皮很厚，这是什么因素造成的？</b></router-link>
          <p class="questioncontent">一、随着现代农业技术的进步和对品种的优选，西瓜的瓜皮越来越薄，但即便如此，西瓜的瓜皮
            厚度也因品种的不同而分为薄皮和厚皮，其中薄皮的品种又可分为皮韧型和皮脆型。一般情况下，中、小型西瓜
            的瓜皮比较薄，而晚熟的大型西瓜的瓜皮会稍微厚些 </p>
          <router-view></router-view>
        </div>
        <div class="meta">
          <span>45个赞</span>
          <span>30条评论</span>
        </div>
      </div>
    </div>

    <!--右侧模块-->
    <div class="celan">
      <div class="s1">
        <a href="#"><img src="../assets/手指.png" alt="">我的收藏</a>
      </div>
      <div class="s1">
        <a href="#"><img src="../assets/灯泡.png" alt="">我关注的话题</a>
      </div>
      <el-popover
        ref="popover4"
        placement="right"
        width="500"
        trigger="click">
        <h3 align="center">写下你的问题</h3>
        <p align="center">描述精准的问题更易得到解答</p>
        <hr><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<textarea rows="3" cols="63">问题标题:</textarea><br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<textarea rows="2" cols="63" id="inputcontent">添加话题:</textarea><br><br>
        <div id="descript">
          &nbsp;&nbsp;&nbsp;&nbsp;<span>&nbsp;问题描述 （可选）：</span>
          <img src="../assets/相机.png" alt="" class="select">
          <img src="../assets/B.png" alt="" class="select">
        </div>
        <br>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;<textarea rows="3" cols="63" id="inputmessage">问题背景，条件等详细信息:</textarea>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox">匿名提问<br><br>
        <hr>
        <el-button type="primary" round style="margin-left: 200px">提交问题</el-button>
      </el-popover>

      <!--Modal模块-->
      <div class="s1">
        <a  v-popover:popover4><img src="../assets/科研项目.png" alt="">我的提问</a>
      </div>
      <div class="s1">
        <a href="#" @click="showModal"><img src="../assets/灯泡.png" alt="">我的回答</a>
        <modal v-show="isModalVisible" @close="closeModal"/>
      </div>
    </div>

  </div>

</template>

<script>
  import Modal from './Modal'

  export default {
    name: "page4",
    data(){
      return{
        isModalVisible:false
      }
    },
    components: {
      Modal
    },
    methods:{
      showModal:function () {

        this.isModalVisible=true
      },
      closeModal:function () {
        this.isModalVisible=false
      }
    }
  }

</script>

<style scoped>
  body{
    margin: 0px;
    padding: 0px;
    background-color: #d4d4d4;
  }
  .container{
    width: 58.5%;
    float: left;
    margin-left: 13%;

  }
  #banner{
    height: 60px;
    margin: 0px;
    padding: 0px;
    width: 100%;
    border: 1px solid #ffffff;
    background-color: #ffffff;
    /*float: left;*/
    margin-top: 3%;
    border: rgba(133, 133, 133, 0.29) solid 1px;
  }

  .c1{
    margin-left: 20px;
    margin-right: 50px;
    margin-top: 12px;
    float: left;

  }
  .c1 a{
    padding-top: -10px;
    color: #6e6e6e;
    font-size: 16px;
    text-decoration: none;
  }
  #c4{
    margin-top: 22px;
    float: right;
    margin-right: 60px;
  }
  #c4 a{
    color: #6e6e6e;
    font-size: 16px;
    text-decoration: none;
  }
  .celan{
    height: 200px;
    width:15%;
    border: 1px solid #ffffff;
    background-color: #ffffff;
    float: right;
    /*margin-top: -50px;*/
    margin-right: 12%;
    margin-top: 1.8%;
    border: rgba(133, 133, 133, 0.29) solid 1px;
  }
  .s1{
    margin-left: 20px;
    margin-top: 15px;
  }
  .s1 a{
    color: #6e6e6e;
    font-size: 16px;
    text-decoration: none;
  }

  .box{
    /*height: 240px;*/
    width: 100%;
    border: 1px solid #ffffff;
    background-color: #ffffff;
    border: rgba(133, 133, 133, 0.29) solid 1px;
    margin-top: 2%;
    clear: both;
  }
  .personMessages{
    margin-top: 2.5%;
    margin-left: 2%;
  }
  .head2{
    height: 40px;
    float: left;
  }
  .Name{
    float: left;
    margin-left: 2%;
  }
  .Name a{
    /*font-family: "黑体";*/
    font-size: 18px;
    color: #0f0f0f;
  }
  .Name a:hover{
    text-decoration: none;
    cursor: pointer;
  }
  .Name span{
    display: block;
  }
  .questionSpan {
    display: block;
    background-color: #5cb85c;
    margin-left: 3%;
    width: 60px;
    height: 32px;
    padding-top: 5px;
    padding-left: 10px;
    float: left;
    font-size: 18px;
    margin-top: 1%;

  }
  .questionDescript{
    clear: both;
    width: 90%;
    margin-top: 3%;
    margin-left: 2.2%;
    padding-top: 1%;
  }
  .questionDescript a{
    /*font-family: "黑体";*/
    font-size: 18px;
    color: #0f0f0f;
  }
  .questionDescript a:hover{
    cursor: pointer;
  }
  .questionDescript p{
    margin-top: 5px;
  }
  .meta{
    margin-top: 2%;
    margin-left: 3%;
    margin-bottom: 2%;
  }
  .meta span{
    font-size: 12px;
    background-color: #8c8c8c;
    padding: 5px;
    margin-right: 10px;
    border-radius: 15px;
    cursor: pointer;
  }

  #inputcontent{
    background:url("../assets/search.png") no-repeat 98%;
  }
  .select{
    float: right;
    margin-right: 20px;
  }
  #inputmessage{
    height: 80px;
  }

</style>
