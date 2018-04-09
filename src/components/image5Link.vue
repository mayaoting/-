<template>
  <div class="similiar">
    <el-row class="ansnum"><b>相关任务</b></el-row>
    <div>
      <div class="task-link">
        <img src="../assets/4.jpg">
        <a>方形西瓜种植技巧</a>
      </div>
      <div class="task-link">
        <img src="../assets/5.jpg">
        <a>无籽西瓜培育方式</a>
      </div>
      <div class="task-link ">
        <img src="../assets/6.jpg">
        <a>西瓜种类</a>
      </div>
    </div>
  </div>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";

    export default {
      components: {ElRow},
      name: "image5-link"
    }
</script>

<style scoped>
  img {
    border-radius: 25px;
  }
  .ansnum {
    padding: 8px ;
    border-bottom: rgba(133, 133, 133, 0.29) solid 1px;
  }
  .similiar {
    background: white;
    margin-top: 13px;
    margin-left: 13px;
    border: rgba(133, 133, 133, 0.29) solid 1px;
    color: #333;
    font-size: 13px;
  }
  .task-link {
    padding: 5px 0;
    margin: 0;
    height: 30px;
  }
  .task-link img{
    height: 30px;
    margin-left: 20px;
  }
  .task-link a{
    text-decoration: none;
    cursor: pointer;
    vertical-align: middle;
    display:inline-block;
    height: 100%;
  }
  .task-link a:hover {
    cursor: pointer;
    color: rgba(0, 0, 255, 0.72);
  }
</style>
