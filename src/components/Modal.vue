<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close" v-show="show">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <slot name="header">
            &nbsp;&nbsp;&nbsp;&nbsp;<p><b>写下你的答案</b></p>
          <button type="button" class="btn-close" @click="close">x</button>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="body">
            <div class="form-group">
              <div class="col-sm-12">
                <!--<input type="text" name="title" id="inputtitle" value="问题标题:" class="form-control">-->
                <textarea rows="3" cols="63">问题标题:</textarea>
                <br>
              </div>
            </div>
            <br>
            <div class="form-group">
              <div class="col-sm-12">
                <!--<input type="text" name="tel" id="inputcontent" value="添加话题:" class="form-control">-->
                <textarea rows="2" cols="63" id="inputcontent">添加话题:</textarea>
              </div>
            </div>
            <br>
            <div class="form-group">
              <div class="col-sm-12" id="descript">
                <span>&nbsp;问题描述 （可选）：</span>
                <img src="../assets/相机.png" alt="" class="select">
                <img src="../assets/B.png" alt="" class="select">
              </div>
            </div>
            <br>
            <div class="form-group">
              <div class="col-sm-12">
                <!--<input type="text" name="title" id="inputmessage" value="问题背景，条件等详细信息:" class="form-control">-->
                <textarea rows="3" cols="63" id="inputmessage">问题背景，条件等详细信息:</textarea>
              </div>
            </div>
            <br>
            <div class="form-group">
              &nbsp;&nbsp;<input type="checkbox">匿名提问 <br>
            </div>

          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn-green" @click="close">提交答案</button>
          </slot>
        </div>

      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: "modal",
        data(){
          return{

          }
        },
        methods:{
          close:function () {
              this.$emit('close');
          },
          show:function () {
              this.$emit('true');
          }
        }
    }


</script>

<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background-color: #fff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x:auto; display: flex;
    flex-direction: column;
  }
  .modal-header, .modal-footer {
    padding: 15px; display: flex;
  }
  .modal-header {
    border-bottom: 1px solid #eee;
    justify-content: space-between;
    text-align: center;
  }
  .modal-footer {
    border-top: 1px solid #eee;
    justify-content: flex-end;
  }
  .modal-body {
    position: relative; padding: 20px 10px;
  }
  .btn-close {
    border: none 0;
    font-size: 20px;
    /*padding: 20px;*/
    cursor: pointer;
    font-weight: bold;
    color: #4aae9b;
    background-color: transparent;
  }
  .btn-green {
    color: #fff;
    background-color: #4aae9b;
    border: 1px solid #4aae9b;
    border-radius: 2px;
    margin-right: 180px;
    height: 40px;
    width: 100px;
  }
  .modal-fade-enter,.modal-fade-leave-active{
    opacity: 0;
  }
  .modal-fade-enter,.modal-fade-leave-active{
    transition:opacity .5s ease;
  }
  #inputcontent{
    background:url("../assets/search.png") no-repeat 98%;
  }
  #inputmessage{
    height: 80px;
  }
  .select{
    float: right;
    margin-right: 20px;
  }
</style>
