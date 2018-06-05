<template>
 <el-row>
        <el-col :span="3" style="background-color: #def; min-height: calc(100vh - 10px);">
          <ul class="dib-wrap">
        <li v-for='(item, index) in menu' :key='index' :class='item.tag' class="line">
          <router-link :to="item.link" class="active"  v-on:click.native='isSubmitted = true' :class="{submit: isSubmitted }" >{{item.label}}</router-link>
        </li>
      </ul>
        </el-col>
        <el-col :span="20">
          <router-view></router-view>
        </el-col>
      </el-row>
</template>

<script>
const menu = [{
  tag: 'iconfont lee-caidan',
  link: '/management/menuManage',
  label: '菜单管理'
}, {
  tag: 'iconfont lee-icon',
  link: '/management/roleManage',
  label: '角色管理'
}, {
  tag: 'iconfont lee-jiaoseguanli',
  link: '/management/userManage',
  label: '用户管理'
}
]
export default {
  name: 'app',
  data () {
    return {
      isSubmitted: false,
      menu: menu
    }
  }
}
</script>
<<style>
.active {
   text-decoration: none;
   font-family: "Microsoft YaHei";
   color: #000000;
   margin: 10px;
}
.line{
  line-height:3;
}
.dib-wrap > *{
 display: inline-block;
}
.submit{
  color:#6959CD;
}

</style>

