<template>
<div>
<el-row :gutter="200">
  <el-col :span="6"><div class="dib">
       <router-link to="/management/newBuilt"> <el-button type="primary" size="medium" icon="el-icon-plus">新建</el-button></router-link>
  </div></el-col>
  <el-col :span="6" ><div class="dib dic">
      <el-input v-model="input"  size="medium"  placeholder="请输入用户名"></el-input>
      </div></el-col>
    <el-col :span="6"><div class="dib did">
        <el-button plain size="medium " @click="serach">搜索</el-button>
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
      prop="nickName"
      label="昵称"
      width="250">
    </el-table-column>
    <el-table-column
      prop="name"
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
       <template slot-scope="scope">
        <span v-if='scope.row.status===1'>已激活</span>
        <span v-else>未激活</span>
      </template>
    </el-table-column>
 <el-table-column
      prop="operations"
      label="操作"
      width="380">
    <template slot-scope="scope">
      <router-link to="/management/UpdateUser">
      <el-button class="el-icon-edit" @click="sendID(scope.row.id)"
          size="mini"
         >&nbsp;编辑</el-button>
          </router-link >
       <el-button class="el-icon-setting"
          size="mini"
          type="primary"
          @click="dialogFormVisible = true">&nbsp;配置角色</el-button>
          <el-dialog title="配置角色" :visible.sync="dialogFormVisible"  width="30%" hig >
            <el-tree
              :data="data2"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[2, 3]"
              :default-checked-keys="[5]"
              :props="defaultProps">
          </el-tree>
          <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
      </el-dialog>

      <el-button class="el-icon-delete"
          size="mini"
          type="danger"
          @click="handleDelete(scope.row.id)">&nbsp;删除</el-button>
    </template>
    </el-table-column>
  </el-table>
</div>   
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10]"
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
import bus from './js/eventBus'
export default {
  data () {
    return {
      tableData: [],
      input: '',
      total: 1,
      currentPage: 1,
      pageSize: 10,
      dialogFormVisible: false,
      count: 1,
      active: true,
      formLabelWidth: '120px',
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      data2: [{
        id: 1,
        label: '超级管理员'
      }, {
        id: 2,
        label: '主编',
        children: [{
          id: 5,
          label: '编辑'
        }, {
          id: 6,
          label: '校对'
        }]
      }]
    }
  },
  mounted () {
    axios.get('http://localhost:8890/api/user/getAll').then(res => {
      this.tableData = res.data
      this.total = res.data.length
    })
  },
  methods: {
    handleSizeChange (val) {
      this.pageSize = val
    },
    handleCurrentChange (val) {
      this.currentPage = val
    },
    sendID (id) {
      bus.$emit('userDefinedEvent', id)
    },
    handleDelete (id) {
      this.$confirm('是否确定删除?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.axios.delete('http://localhost:8890/api/user/deleteUser', {params: {id: id}}).then(res => {
          if (res.data === 'OK') {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            axios.get('http://localhost:8890/api/user/getAll').then(res => {
              this.tableData = res.data
              this.total = res.data.length
            })
          } else {
            this.$message({
              type: 'info',
              message: '删除失败'
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    serach () {
      axios.get('http://localhost:8890/api/user/findUserByName', {params: {username: this.input}}).then(res => {
        console.log(res)
        this.tableData = res.data
        this.total = res.data.length
      })
    }
  }
}
</script>
<style>
.dib {
  margin: 10px;
}
.dic {
  position: absolute;
  right: 200px;
}
.did {
  position: absolute;
  right: 100px;
}
.el-table .cell {
  color: black;
}
.el-table thss {
  background-color: #f0f0f0;
}
.block {
  position: absolute;
  right: 4%;
}
.el-dialog__body{
  border-style: solid;
  border-width: 1px;
   width: 470px;
  height: 200px;
  margin: 50px
}
</style>