<template>
  <div>
      <el-row :gutter="200">
  <el-col :span="6"><div class="dib">
       <router-link to="/management/userManage"> <el-button type="primary" size="medium" icon="el-icon-plus">返回</el-button></router-link>
  </div></el-col>
</el-row>
<div class="title">
    <h3>
      修改用户
    </h3>
</div>
<div>
<el-form ref="form" :model="form" label-width="120px" class="blk">
  <el-form-item label="用户名">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
   <el-form-item label="昵称">
    <el-input v-model="form.nickName"></el-input>
  </el-form-item>
  <el-form-item label="手机">
    <el-input v-model="form.phoneNumber"></el-input>
  </el-form-item>
  <el-form-item label="邮箱">
    <el-input v-model="form.email"></el-input>
  </el-form-item>
    <el-form-item label="状态">
         <el-radio-group v-model="form.status">
         <el-radio  label="1">已激活</el-radio>
         <el-radio  label="2">未激活</el-radio>
          </el-radio-group>
    </el-form-item>
     <el-form-item label="用户类型">
         <el-radio-group v-model="form.type">
         <el-radio  label="1">注册用户</el-radio>
         <el-radio  label="2">后台配置用户</el-radio>
          </el-radio-group>
    </el-form-item>
      <el-form-item label="备注">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
    <el-form-item size="large">
    <el-button type="primary" @click="onSubmit">保存</el-button>
  </el-form-item>
</el-form>
</div>
  </div>
</template>
<script>
  import bus from './js/eventBus'

  export default {
    data () {
      return {
        form: {
          name: '',
          nickName: '',
          phoneNumber: '',
          email: '',
          status: '2',
          type: '2',
          desc: ''
        }
      }
    },
    mounted () {
      this.form.name = bus.name
      this.form.nickName = bus.nickName
      this.form.phoneNumber = bus.phoneNumber
      this.form.email = bus.email
      this.form.status = bus.status
      bus.$on('userDefinedEvent', function (msg) {
        bus.id = msg
        var appData = require('./js/data.json')
        for (const obj of appData) {
          if (obj.id === bus.id) {
            bus.name = obj.username
            bus.nickName = obj.nickname
            bus.email = obj.email
            console.log(obj.status)
            if (obj.status === '已激活') {
              bus.status = '1'
            } else {
              bus.status = '2'
            }
          }
        }
      })
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      }
    }
  }
</script>
<style>
.blk{
    width: 30%;
    position: absolute;
    top:20%;
    left:20%;
}
.title{
  margin-left: 1em
}
</style>

