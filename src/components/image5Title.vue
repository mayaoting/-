<template>
  <el-row class="info">
    <el-col :span="12" :offset="4">
      <div class="tags">
        <a>农业</a>
        <a>西瓜</a>
        <a>西瓜种植</a>
      </div>
      <h4><b>{{title}}</b></h4>
      <p class="brief">{{brief}}</p>
      <div class="tools">
        <a>
          <img src="../assets/comment.png">
          <span>添加评论</span>
        </a>
        <a>
          <img src="../assets/share.png">
          <span>分享</span>
        </a>
        <a>
          <img src="../assets/star.png">
          <span>邀请回答</span>
        </a>
        <a>
          <img src="../assets/flag.png">
          <span>举报</span>
        </a>
        <a>···</a>
      </div>
    </el-col>
    <el-col :span="4" class="interact">
      <el-row>
        <el-col :span="8" :offset="4">
          <p>关注者</p>
          <p class="num"><b>3</b></p>
        </el-col>
        <el-col :span="8">
          <p>被浏览</p>
          <p class="num"><b>2436</b></p>
        </el-col>
      </el-row>
      <div class="interactBtn">
        <el-button size="small" type="primary" class="btn-xs concern">关注问题</el-button>
        <el-button size="small" class="answer"><img src="../assets/pencil.png">写回答</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";

    export default {
      components: {ElRow},
      name: "image5-title",
      data(){
        return {
          title:"种植西瓜，发现西瓜皮很厚，这是什么因素造成的？",
          brief:"种植的西瓜皮过厚是什么因素造成的？"
        }
      }
    }
</script>

<style scoped>
  .info {
    background: #FFFFFF;
    padding: 8px 0;
    border-bottom: rgba(133, 133, 133, 0.29) solid 1px;
  }

  .tags a {
    padding: 5px 10px;
    margin-right: 5px;
    color: rgba(0, 0, 255, 0.72);
    text-decoration: none;
    cursor: pointer;
    background: rgba(136, 241, 226, 0.19);
    border-radius: 25px;
    font-size: 10px;
  }
  .tags a:hover {
    color: #FFFFFF;
    background: rgba(61, 55, 255, 0.74);
  }
  .brief{
    font-size: 12px;
  }
  .tools {
    display: inline;
    height: 20px;
    padding: 2px;
  }
  .tools img{
    height: 17px;
    margin-top: -2px;
  }
  .tools a {
    line-height: 12px;
    font-size: 12px;
    color: #858585;
    text-decoration: none;
    margin-right: 15px;
  }
  .tools a:hover {
    cursor: pointer;
    color: rgba(0, 0, 255, 0.72);
  }

  .interact {
    font-size: 10px;
    text-align: center;
    padding: 0 0;
    color: #858585;
  }
  .interact .num {
    font-size: 12px;
    color: black;
  }
  .interactBtn button {
    margin: 28px 12px 0 12px;
  }
  .interact button img{
    height: 14px;
    margin-right: 5px;
  }
  .answer {
    color: dodgerblue;
  }
</style>
