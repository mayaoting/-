<template>
  <div class="grandfather">
    <div class="father">
      <div class="son">
        <hr class="up"/>
        <p class="tt1">农业知识竞赛题目</p>
        <p class="tt2">Agricultural knowledge competition</p>
        <hr class="down"/>
        <h4 id="first">1.农田的化肥流入到河流中，主要引起的反应是 ()<span>*</span></h4>
        <input type=radio name=a1 id="a1">  <label class="second" for="a1">化学反应</label><br>
        <input type=radio name=a1 id="a2">  <label class="third" for="a2">营养养化</label><br>
        <input type=radio name=a1 id="a3">  <label class="third" for="a3">物理反应</label><br>
        <input type=radio name=a1 id="a4">  <label class="third" for="a4">生物反应</label><br>
        <h4 class="four">2.造成土地资源的丧失和破坏的主要原因是 ()<span>*</span></h4>
        <input type=radio name=a2 id="a5">  <label class="second" for="a5">滥伐森林、开垦草地，造成水土流失</label><br>
        <input type=radio name=a2 id="a6">  <label class="third" for="a6">人类正制定法规，采取有效措施来保护它</label><br>
        <input type=radio name=a2 id="a7">  <label class="third" for="a7">土壤沙化</label><br>
        <input type=radio name=a2 id="a8">  <label class="third" for="a8">自然现象</label><br>
        <h4 class="four">3.超级稻是指 ()<span>*</span></h4>
        <input type=radio name=a3 id="a9">  <label class="second" for="a9">产量特别高的水稻</label><br>
        <input type=radio name=a3 id="a10">  <label class="third" for="a10">米质特别好的水稻</label><br>
        <input type=radio name=a3 id="a11">  <label class="third" for="a11">抗性特别好的水稻</label><br>
        <input type=radio name=a3 id="a12">  <label class="third" for="a12">超能力的水稻</label><br>
        <h4 class="four">4.根据国家有关规定，以下哪一种药物是国家明文禁止添加的违禁药物，不能作为饲料添加剂使用 ()<span>*</span></h4>
        <input type=radio name=a4 id="a13">  <label class="second" for="a13">玉米</label><br>
        <input type=radio name=a4 id="a14">  <label class="third" for="a14">瘦肉精（盐酸克伦特罗）</label><br>
        <input type=radio name=a4 id="a15">  <label class="third" for="a15">食盐</label><br>
        <input type=radio name=a4 id="a16">  <label class="third" for="a16">维生素</label><br>
        <h4 class="four">5.以下哪一个国家是全世界养猪业最发达、猪肉出口最多的国家之一？ ()<span>*</span></h4>
        <input type=radio name=a5 id="a17">  <label class="second" for="a17">古巴</label><br>
        <input type=radio name=a5 id="a18">  <label class="third" for="a18">朝鲜</label><br>
        <input type=radio name=a5 id="a19">  <label class="third" for="a19">丹麦</label><br>
        <input type=radio name=a5 id="a20">  <label class="third" for="a20">澳大利亚</label><br>
        <div class="box"><input class="button" type="button" value="点我提交" @click="SubMit"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page2',
    data(){
      return {
      }
    },
    methods:{
      SubMit:function () {
        var flag=true;
        var str1="请选择第";
        var str2="题答案";
        var val = new Array();
        val[0] = $('input:radio[name="a1"]:checked').val();
        val[1] = $('input:radio[name="a2"]:checked').val();
        val[2] = $('input:radio[name="a3"]:checked').val();
        val[3] = $('input:radio[name="a4"]:checked').val();
        val[4] = $('input:radio[name="a5"]:checked').val();
        for (var i = 0; i < val.length; i++) {
          if (val[i] == null) {
            if (flag == true) {
              str1 += (i + 1).toString();
            } else {
              str1 += "、" + (i + 1).toString();
            }
            flag=false;
          }
        }
        if (flag) {
          alert("提交成功！");
        } else {
          str1+=str2;
          alert(str1);
        }
      }
    }
  }

</script>

<style>
  .grandfather{
    background-image: url("../assets/bg.png");
    background-size: 1366px 2000px;
  }

  .up {
    position: relative;
    height: 2px;
    border: none;
    border-top: 3px solid black;
  }

  .grandfather {
    padding-top: 40px;
    filter:alpha(Opacity=80);
    -moz-opacity:0.8;
    opacity: 0.8;
    padding-bottom: 40px;
  }
  .father {
    background-color: white;
    width: 1000px;
    margin: auto;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .son {
    background-color: white;
    width: 800px;
    margin: auto;
  }

  .tt1 {
    text-align: center;
    font-weight: bold;
    font-size: 50px;
  }

  .tt2 {
    text-align: center;
    font-weight: bold;
    font-size: 10px;
  }

  .down {
    position: relative;
    height: 1px;
    border: none;
    border-top: 3px dashed black;
  }

  #first {
    margin-top: 70px;
  }

  .second {
    margin-top: 25px;
  }

  .third {
    margin-top: 20px;
  }

  .four {
    margin-top: 50px;
  }

  .button {
    margin: auto;
    display: block;
    width: 100px;
    height: 30px;
  }

  .box {
    margin-top: 50px;
    width: 800px;
  }

  span {
    color: red;
  }
</style>
