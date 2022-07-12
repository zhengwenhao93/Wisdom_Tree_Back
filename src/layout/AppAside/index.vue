<template>
  <el-menu
    default-active="0"
    background-color="#222d32"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="0">
      <i class="el-icon-menu"></i>
      <span>控制台</span>
    </el-menu-item>

    <el-submenu index="1">
      <template >
        <i class="el-icon-s-claim"></i>
        <span>系统管理</span>
      </template>

      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span >用户管理</span>
      </el-menu-item>

      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span >角色管理</span>
      </el-menu-item>

      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span >菜单管理</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {}
  },

  mounted () {},

  methods: {}
}
</script>

<style lang="scss" scoped></style>
