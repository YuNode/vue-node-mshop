<template>
  <div id="app">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router unique-opened :default-active="$route.path">
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>分类管理
            </template>
            <el-menu-item-group>
              <template slot="title">总分类</template>
              <el-menu-item index="/category/list">总分类列表</el-menu-item>
              <el-menu-item index="/category/create">新建总分类</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="商品分类">
              <el-menu-item index="/itemcategory/list">一级分类列表</el-menu-item>
              <el-menu-item index="/itemcategory/create">新建一级分类</el-menu-item>
              <el-menu-item index="/secondcategory/list">二级分类列表</el-menu-item>
              <el-menu-item index="/secondcategory/create">新建二级分类</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>商品管理
            </template>
            <el-menu-item-group>
              <template slot="title">商品规格</template>
              <el-menu-item index="/rule/list">规格列表</el-menu-item>
              <el-menu-item index="/rule/create">新建规格</el-menu-item>
              <el-menu-item index="/ruleitem/list">规格值列表</el-menu-item>
              <el-menu-item index="/ruleitem/create">新建规格值</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="商品中心">
              <el-menu-item index="/good/list">商品列表</el-menu-item>
              <el-menu-item index="/good/create">新建商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>商家管理
            </template>
            <el-menu-item-group>
              <template slot="title">商家中心</template>
              <el-menu-item index="/shop/list">商家列表</el-menu-item>
              <el-menu-item index="/shop/create">新增商家</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">订单中心</template>
              <el-menu-item index="/order/list">订单列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-user"></i>用户中心
            </template>
            <el-menu-item-group>
              <el-menu-item index="/user/list">用户列表</el-menu-item>
              <el-menu-item index="/manger/create">管理员列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <router-view :key="$route.path"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
