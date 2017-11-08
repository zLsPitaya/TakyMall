<template>
  <div>
    <div class="nav-breadcrumb-wrap">
      <div class="container">
        <nav class="nav-breadcrumb">
          <a href="/">主页</a>
          <span>商品列表</span>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import './../assets/css/nav-bread.css';
export default {
  name: 'NavBreader',
  data() {
    return {
      msg: 'Welcome to NavBreader'
    }
  }
}
</script>
