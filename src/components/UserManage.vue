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
    :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    border
    style="width: 100% " >
      <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="img"
      label="照片"
      width="130">
    </el-table-column>
    <el-table-column
      prop="nickname"
      label="昵称"
      width="250">
    </el-table-column>
    <el-table-column
      prop="username"
      label="用户名"
      width="250">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      width="250">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="250">
    </el-table-column>
 <el-table-column
      prop="operations"
      label="操作"
      width="380">
    <template slot-scope="scope">
      <router-link to="/management/newBuilt">
      <el-button class="el-icon-edit"
          size="mini"
         >&nbsp;编辑</el-button>
          </router-link >
       <el-button class="el-icon-setting"
          size="mini"
          type="primary"
          @click="handleDeploy(scope.$index, scope.row)">&nbsp;配置角色</el-button>
      <el-button class="el-icon-delete"
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">&nbsp;删除</el-button>
    </template>
    </el-table-column>
  </el-table>
</div>   
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 50, 100, 200]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
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
      input: '',
      total: '',
      currentPage: 1,
      pageSize: 10
    }
  },
  mounted () {
    axios.get('/api/permitform').then(res => {
      this.tableData = res.data.formdata
      this.total = res.data.formdata.length
    })
  },
  methods: {
    handleSizeChange (val) {
      this.pageSize = val
    },
    handleCurrentChange (val) {
      this.currentPage = val
    }
  }
}
</script>
<style>
.dib{
    margin: 10px;
}
.dic{
    position: absolute;;
    right: 200px;
}
.did{
    position:absolute;
    right: 100px;
}
.el-table .cell{
    color:black
}
.el-table thss{
    background-color:#F0F0F0;
}
.block{
     position:fixed;
     right: 4%;
}
</style>