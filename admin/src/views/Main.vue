<template>
  <el-container>
    <el-aside width="200px">
      <el-menu mode="vertical" style="height:100vh" :default-active="$route.path" router>
        <el-submenu v-for="(item, index) in menu.items"
          :index="`menu-item-${index}`"
          :key="`menu-item-${index}`">
          <template slot="title">{{item.title}}</template>
          <el-menu-item v-for="(subItem, subIndex) in item.items"
            :index="subItem.path" :key="`menu-item-${index}-${subIndex}`">
              {{subItem.title}}
          </el-menu-item>
        </el-submenu>
      </el-menu>  
    </el-aside>
    <el-container>
      <el-header>
        <h3>酒儿-后台管理界面</h3>
      </el-header>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";



@Component({
})
export default class App extends Vue {
  menu = {
    items: [
      {
        title: '内容管理',
        items: [
          {title: '首页',path:"/"},
          {title: '视频管理',path:"/courses/list"},
          {title: '视频编辑',path:"/episodes/list"}
        ]
      },
      {
        title: '运营管理',
        items: [
          {title: '用户管理',path:"/users/list"},
        ]
      }
    ]
  }
}
</script>

<style>

</style>