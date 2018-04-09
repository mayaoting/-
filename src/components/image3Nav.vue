<template>
   <div>
     <el-menu :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect">
       <el-menu-item index="1">种植业</el-menu-item>
       <el-menu-item index="2">畜牧业</el-menu-item>
       <el-menu-item index="3">农贸业</el-menu-item>
       <el-menu-item index="4">渔业</el-menu-item>
       <el-menu-item index="5">农业加工</el-menu-item>
     </el-menu>
   </div>
</template>

<script>
    export default {
      name: "image3Nav",

      data() {
        return {
          activeIndex: '1',
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          this.$emit("linkIndex",key);
        }
      }
    }
</script>

<style scoped>
  .el-menu{
    padding:0 7%;
  }
  .el-menu-item{
    height: 45px;
    line-height: 45px ;
  }
</style>
