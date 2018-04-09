<template>
  <div class="aricle" >
    <el-row class="ansnum">
      <el-col :span="6"><b>1个回答</b></el-col>
      <el-col :span="6" :offset="12" style="text-align: right">默认排序<img src="../assets/un&down.png"></el-col>
    </el-row>
    <el-row class="user">
      <el-col :span="2" > <img class="userimg"src="../assets/3.jpg"></el-col>
      <el-col :span="8">
        <div><b>张伟卫</b></div>
        <div>农业互联网</div>
      </el-col>
    </el-row>
    <p  class="agree">3人赞同了该回答</p>
    <p class="aricleContain">造成西瓜空心皮厚的原因很多，主要与品种、气候和管理等因素有关系。<br>
      <b>1品种</b><br>    随着现代农业技术的进步和对品种的优选，西瓜的瓜皮越来越薄，但即便如此，西瓜的瓜皮厚度也因品种的不同而分为薄皮和厚皮，其中薄皮的品种又可分为皮韧型和皮脆型。一般情况下，中、小型西瓜的瓜皮比较薄，而晚熟的大型西瓜的瓜皮会稍微厚些。<br>
      <b>2气候</b><br>    在西瓜的开花期和膨大期，若遇连续阴雨、低温及寡照天气，不但对西瓜坐果极为不利，也易引发西瓜空心皮厚。一般露地西瓜较棚室西瓜更易出现空心皮厚。<br>
      <b>3管理</b><br>①留瓜节位留瓜节位若低则西瓜的瓜皮易厚。个别农户为使西瓜提早上市，将10节以内的第1雌花授粉，让其结瓜，导致坐瓜节位过低、瓜皮增厚。<br>
      ②肥水管理西瓜生育期较短，生长量大，因而西瓜需肥量较大，必须合理协调有机肥与化学肥料的使用;同时注意各种营养元素的搭配比例，若氮肥施用比例过大，也易造成空心皮厚。果实膨大期切不可缺水，否则果实过早结束膨大进入成熟阶段，导致细胞得不到充实，造成细胞壁破裂，最终导致西瓜空心皮厚。<br>
      ③硼素营养失调<br>
      a.硼素的营养功能。硼能参与植株体内碳水化合物的分配和运转，促进营养器官和生殖器官的生长，促进早熟、改善品质，增强抗逆性。硼肥充足则养分运输畅通，能使西瓜成为薄皮实心的优质瓜。<br>
      b.缺硼症状。叶缘黄化，叶的中部上拱，边缘向下卷曲，整个叶片呈降落伞状。部分茎蔓顶端变褐枯死。<br>
      c.缺硼的原因。土壤：土壤质地轻、砂性强，土壤中的有效硼易淋失;新开垦的蔬菜基地(西瓜年年串地)，土壤中有机质少;土壤过于干旱;土壤中大量施用石灰等。气候条件：干旱可导致土壤中有机质含量减少，土壤对硼的固定作用增强，导致硼在土壤中的流动性减弱。<br>
      d.硼素过剩。土壤中硼素过多，植株自下部叶片开始变黄白色，叶脉间有黄白色斑点，并向上部叶扩展。④采收采收未熟的西瓜则瓜皮厚。</p>
  </div>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";

    export default {
      components: {ElRow},
      name: "image5-actical"
    }
</script>

<style scoped>
  .aricle {
    background: white;
    margin-top: 13px;
    border: rgba(133, 133, 133, 0.29) solid 1px;
    padding: 2px 15px;
    color: #333;
  }
  .ansnum {
    padding: 8px ;
    border-bottom: rgba(133, 133, 133, 0.29) solid 1px;
  }
  .ansnum img{
    margin-left: 5px;
    cursor: pointer;
  }
  .user {
    margin: 8px 0;
    font-size: 8px;
  }
  .userimg{
    margin-left: 8px;
    cursor: pointer;
    height: 35px;
    border-radius: 25px;
  }
  .agree{
    color: #909098;
    font-size: 11px;
  }
  .aricleContain {
    font-size: 12px;
  }
</style>
