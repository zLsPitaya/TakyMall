<template>
  <div>
    <footer class="footer">
      <div class="footer__wrap">
        <div class="footer__secondary">
          <div class="footer__inner">
            <div class="footer__secondary__nav">
              <span>Copyright©2013-{{nowYear}} www.zlspitaya.com All Rights Reserved.</span>
              <a href="#">
                本项目仅供个人学习使用。
              </a>
              <a href="#">
                Taky Mall && 紫蓝的火龙果
              </a>
              <a href="#">
                版权所有 zlspitaya
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import './../assets/css/nav-footer.css';
export default {
  name: 'NavFooter',
  data() {
    return {
      nowYear: new Date().getFullYear()
    }
  }
}
</script>
