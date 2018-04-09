<template>
  <div class="container" id="containBox">
    <div class="contian-box">
      <p>Office</p>
      <ul class="fileDiv">
        <li v-for="item in fileitems[index-1]" v-if="item.type === 'word' || item.type === 'ppt' || item.type==='excel'">
          <div><img v-bind:src="require('../assets/' + item.type + '.png')"></div>
          <a>{{item.name}}</a>
          <p>{{item.size}}</p>
        </li>
      </ul>
      <p>PDF</p>
      <ul class="fileDiv">
        <li v-for="item in fileitems[index-1]" v-if="item.type === 'pdf' || item.type === 'video'">
          <div><img v-bind:src="require('../assets/' + item.type + '.png')"></div>
          <a>{{item.name}}</a>
          <p>{{item.size}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "image3-contain",
        props: {
          index:0
        },
        data(){
          return{
            fileitems: [
               [
                {
                  type: "word",
                  name: "野山椒种植心得",
                  size: "3.7M"
                },
                {
                  type: "word",
                  name: "西红柿规模种植",
                  size: "23.7M"
                },
                {
                  type: "ppt",
                  name: "土豆无水种植方案",
                  size: "3.2M"
                },
                {
                  type: "word",
                  name: "大白菜秋季成长阶段",
                  size: "2.7M"
                },
                {
                  type: "word",
                  name: "小青菜种植过程管理",
                  size: "3.4M"
                },
                {
                  type: "excel",
                  name: "土豆定期施肥",
                  size: "3.3M"
                },
                {
                  type: "word",
                  name: "豇豆种植需求",
                  size: "2.7M"
                },
                {
                  type: "excel",
                  name: "蟹用水草培育",
                  size: "2.1M"
                },
                {
                  type: "word",
                  name: "鱼用水草养殖",
                  size: "3.1M"
                },
                {
                  type: "ppt",
                  name: "冬笋介绍",
                  size: "2.3M"
                },
                {
                  type: "excel",
                  name: "春笋收获条款",
                  size: "3.4M"
                },
                {
                  type: "pdf",
                  name: "土豆养殖相关文献",
                  size: "9.6M"
                },
                {
                  type: "pdf",
                  name: "规模养殖技巧",
                  size: "8.8M"
                },
                {
                  type: "pdf",
                  name: "芹菜施肥计划",
                  size: "11M"
                },
                {
                  type: "video",
                  name: "大蒜种植教程",
                  size: "34.3M"
                },
                {
                  type: "video",
                  name: "蒜苗成长经历",
                  size: "20.1M"
                },
                {
                  type: "pdf",
                  name: "丝瓜存活法则",
                  size: "6.2M"
                }
              ],
               [
                {
                type: "ppt",
                name: "母猪营养和饲料管理",
                size: "2.2M"
                },
                {
                  type: "word",
                  name: "加强你的猪场生物安全",
                  size: "3.6M"
                },
                {
                  type: "word",
                  name: "肉羊标准化养殖技术",
                  size: "1.6M"
                },
                {
                  type: "excel",
                  name: "中国渔业统计年鉴",
                  size: "0.7M"
                },
                {
                  type: "ppt",
                  name: "肉种鸡饲养管理要点",
                  size: "10.7M"
                },
                {
                  type: "pdf",
                  name: "肉鸭生产关键技术介绍",
                  size: "4.6M"
                },
                {
                  type: "pdf",
                  name: "2018年水产养殖形式分析",
                  size: "9.8M"
                },
                {
                  type: "video",
                  name: "高产奶牛体况",
                  size: "36M"
                },
                {
                  type: "pdf",
                  name: "利用疫苗预防猪瘟",
                  size: "3.2M"
                }],
               [
                 {
                  type: "word",
                  name: "枇杷砧木育苗方法",
                  size: "2.2M"
                 },
                {
                  type: "ppt",
                  name: "西红柿“空心果”",
                  size: "3.6M"
                },
                {
                  type: "word",
                  name: "温室黄瓜怎么“增肥”",
                  size: "9.6M"
                },
                {
                  type: "pdf",
                  name: "葫芦果斑病该如何防治",
                  size: "6.6M"
                },
                {
                  type: "pdf",
                  name: "菠菜苗如何培育？",
                  size: "7.7M"
                }],
               [
                {
                  type: "ppt",
                  name: "虹鳟鱼的保鲜技术",
                  size: "7.7M"
                },
                {
                  type: "word",
                  name: "开春后淡水鱼池塘管理要点",
                  size: "6.6M"
                },
                {
                  type: "excel",
                  name: "淮北市大宗品种鱼类价格稳定",
                  size: "5.5M"
                },
                {
                  type: "ppt",
                  name: "鲤鱼人工繁育技术",
                  size: "4.4M"
                },
                {
                  type: "pdf",
                  name: "蟹池水草种植结构须合理",
                  size: "3.3M"
                }],
               [
                {
                  type: "word",
                  name: "苹果脆片加工方法",
                  size: "4.7M"
                },
                {
                  type: "word",
                  name: "龙眼酒的酿造技术",
                  size: "2.9M"
                },                {
                  type: "excel",
                  name: "苹果加工市场“两翼齐飞”",
                  size: "5.4M"
                },
                {
                  type: "video",
                  name: "玉米深加工三法",
                  size: "12.5M"
                },
                {
                  type: "video",
                  name: "辣椒罐头的加工",
                  size: "13.2M"
                }]
            ]
          }
        }
    }
</script>

<style scoped>
  .container p{
    margin: 10px 5px;
    color: #838383;
  }
  .contian-box {
    margin: auto;
    width: 85%;
    padding: 10px 20px;
    box-sizing: border-box;
  }
  .contian-box ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .contian-box li {
    flex-basis: 13%;
    text-align: center;
    padding: 0px;
    margin: 10px;
  }
  .contian-box img{
    margin: 7px auto;
    cursor: pointer;
  }
  .contian-box a{
    font-size: 10px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.82);
    cursor: pointer;
  }
  .contian-box p{
    font-size: 7px;
    margin: 2px auto 15px auto;
  }

</style>
