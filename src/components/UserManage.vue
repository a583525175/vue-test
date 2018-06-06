<template>
<div>
<el-row :gutter="200">
  <el-col :span="6"><div class="dib">
       <router-link to="/management/newBuilt"> <el-button type="primary" size="medium" icon="el-icon-plus">新建</el-button></router-link>
  </div></el-col>
  <el-col :span="6" ><div class="dib dic">
      <el-input v-model="input"  size="medium"  placeholder="请输入内容"></el-input>
      </div></el-col>
    <el-col :span="6"><div class="dib did">
        <el-button plain size="medium ">搜索</el-button>
    </div></el-col>
</el-row>
    <div class="dib">
      <el-table
    :data="tableData"
    border
    style="width: 100% " >
      <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="img"
      label="照片"
      width="180">
    </el-table-column>
    <el-table-column
      prop="nickname"
      label="昵称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="username"
      label="用户名">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态">
    </el-table-column>
 <el-table-column
      prop="operations"
      label="操作">
    </el-table-column>
  </el-table>
</div>   
</div>
</template>
<script>
import axios from 'axios'
import './js/from.js'
export default {
  data () {
    return {
      tableData: [],
      input: ''
    }
  },
  mounted () {
    axios.get('/api/permitform').then(res => {
      console.log(res)
      this.tableData = res.data.formdata
    })
  }
}
</script>
<style>
.dib{
    margin: 10px;
}
.dic{
    position:fixed;
    right: 8%;
}
.did{
    position:fixed;
    right: 3%;
}
.el-table .cell{
    color:black
}
.el-table thss{
    background-color:#F0F0F0;
}
</style>