<template>
  <div>
    <image5-title></image5-title>
    <el-row>
      <el-col :span="12" :offset="4"><image5-actical></image5-actical></el-col>
      <el-col :span="4"><image5-link></image5-link></el-col>
    </el-row>

  </div>
</template>

<script>
  import image5Title from './image5Title'
  import image5Actical from './image5Actical'
  import image5Link from './image5Link'
  import ElRow from "element-ui/packages/row/src/row";
    export default {
        name: "image-demo5",
        components:{
          ElRow,
          "image5-title" : image5Title,
          "image5-actical" : image5Actical,
          "image5-link" : image5Link
        }
    }
</script>

<style scoped>

</style>
