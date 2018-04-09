<template>
  <div id="header">
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <img class="header-icon" src="../assets/icon.png"/>
          <img class="header-font" src="../assets/header-font.png"/>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <ul class="nav">
            <router-link to="/" class="link">在线课堂</router-link>
            <router-link to="/imageDemo3" class="link">在线实验室</router-link>
            <router-link to="/page4" class="link">在线广场</router-link>
          </ul>
        </div>
      </el-col>
      <el-col :span="4" :offset="4">
        <div class="grid-content bg-purple">
          <input type="text" class="search">
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">
          <img class="message" src="../assets/message.png">
          <div class="touxiang">
            <el-dropdown  @command="handleCommand">
              <img class="img-circle head" src="../assets/head.jpg">
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item  command="setting">设置</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

        </div>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app-header',
    data(){
      return {
      }
    },
    methods:{
      //下拉菜单的事件需要使用回掉函数
      setting:function () {
        this.$router.push('/setting');
      },
      handleCommand(command) {
        this.setting();
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header {
    padding-top: 13px;
    height: 45px;
    background-color: #12263D;
  }
  .header-icon {
    margin-left: 20px;
    height: 30px;
  }
  .header-font {
    height: 35px;
  }
  .nav{
    margin-top: 5px;
  }
  .nav a{
    text-decoration: none;
    font-size: 15px;
    display: inline;
    color: #cdcdd5;
    margin: 0 30px;
  }
  .nav a:hover{
    color: #FFFFFF;
    cursor: pointer;
  }

  .search {
    width: 100%;
    height: 28px;
    border: 0;
    border-radius: 25px;
    background: #071927 url("../assets/search.png") no-repeat 95%;
  }

  .message {
    margin-left: 30%;
  }
  .touxiang{
    display: inline-block;
    /*margin-left:5%;*/
    /*margin-top: -10px;*/
    position: absolute;
    right: 60px;
    top: -5px;
  }
  .head {
    /*margin-left: 5%;*/
    height: 40px;
    border-radius: 25px;
  }
  .touxiang::after{
    /*content: "";*/
    /*display: inline-block;*/
    /*width: 0;*/
    /*height: 0;*/
    /*border: 8px solid transparent ;*/
    /*border-left: 8px solid #AFABAB;*/
    /*position: relative;*/
    /*top: 2px;*/
    /*left: 2px;*/
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
</style>
