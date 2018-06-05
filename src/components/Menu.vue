<template>
<div>
    <header>
      <div class ="dib">单应用后台Demo</div>
      <ul class="dib dib-wrap menu">
        <li v-for='(item, index) in menu' :key='index' :class='item.tag' >
          <router-link :to="item.link"  class="active" >{{item.label}}</router-link>
          </li>
      </ul>
    </header>
    <router-view></router-view>
</div>
</template>

<script>
const menu = [{
  tag: 'el-icon-document',
  link: '/management',
  label: '内容管理'
}, {
  tag: 'el-icon-menu',
  link: '/components',
  label: '互动组件'
}, {
  tag: 'el-icon-printer',
  link: '/system',
  label: '系统'
}]
export default {
  name: 'app',
  data () {
    return {
      menu: menu
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background: #6495ED;
    color:#fff;
}
.dib{
   display: inline-block;
   text-align: center;
   margin-left: 30px;
}
.dib-wrap > *{
 display: inline-block;
}
.menu li{
  padding: 0.5em 1em;
}
.active {
   text-decoration: none;
   font-family: "Microsoft YaHei";
   color:#FFFFFF;
   margin: 10px;
}
</style>
