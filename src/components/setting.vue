<template>
    <div id="Setting">
      <p><b>账号设置</b></p>
      <hr>
      <div id="layInLeft">
        <br>
        <span>用户名</span>
        <br>
        <input type="text" class="accountname" name="username" >
      </div>
      <div id="layInRight">
        <p>上传头像</p>
        <input type="file" class="picture" name="userPicture" placeholder="选择上传的图片">
      </div>
    </div>
</template>

<script>
    export default {
        name: "setting",

    }
</script>

<style scoped>
  #Setting{
    width: 55%;
    height: 500px;
    /*position: absolute;*/
    margin-left: 20%;
    margin-top: 2%;
    /*border: rgba(133, 133, 133, 0.29) solid 1px;*/
    background-color: white;
  }
  #layInLeft{
    width: 50%;
    /*border: rgba(133, 133, 133, 0.29) solid 1px;*/
    float: left;
  }
  #layInLeft p{
    font-size: large;
  }
  #layInLeft span{
    display: block;
    /*margin-left: 8%;*/
  }
  #layInRight{
    width: 38%;
    /*border: rgba(133, 133, 133, 0.29) solid 1px;*/
    float: right;
    margin-top: 2%;
  }
  .accountname{
    width: 80%;
    height: 30px;
    border: 1px solid #d1d5da;
    box-shadow: inset 0 1px 2px rgba(27,31,35,0.075);
  }
  .picture{
    height: 180px;
    width: 180px;
    border: 2px dashed #d9d9d9;
    cursor: pointer;
  }


</style>
