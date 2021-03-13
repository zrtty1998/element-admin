<template>
  <div id="app">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>内容管理</template
            >
            <el-menu-item-group>
              <el-menu-item index="/articles/index">文章列表</el-menu-item>
              <el-menu-item index="/articles/create">新建文章</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

        <el-main>
          <router-view></router-view>
        </el-main>
    </el-container>
  </div>
</template>


<script>
export default {


};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
