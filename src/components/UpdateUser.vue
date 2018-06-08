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
  import qs from 'qs'

  export default {
    data () {
      return {
        form: {
          id: '',
          name: '',
          nickName: '',
          phoneNumber: '',
          email: '',
          status: '',
          type: '',
          desc: ''
        }
      }
    },
    mounted () {
      bus.$on('userDefinedEvent', function (msg) {
        bus.id = msg
      })
      var id = bus.id
      this.axios.get('http://localhost:8890/api/user/findById', {params: {id: id}}).then(res => {
        this.form.name = res.data.name
        this.form.nickName = res.data.nickName
        this.form.phoneNumber = res.data.phoneNumber
        this.form.email = res.data.email
        this.form.status = res.data.status + ''
        this.form.type = res.data.type + ''
        this.form.desc = res.data.desc
        this.form.id = id
      })
    },
    methods: {
      onSubmit () {
        this.axios.put('http://localhost:8890/api/user/updateUser', qs.stringify(this.form)).then(res => {
          if (res.data === 'OK') {
            this.$message({
              message: '修改成功!',
              type: 'success'
            })
            this.$router.push('/management/userManage')
          } else {
            this.$message.error('修改失败!')
          }
        })
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

