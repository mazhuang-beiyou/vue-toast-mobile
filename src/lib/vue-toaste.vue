<template>
  <section class="toaster-container">
    <div class="toaster" :class="[visible?'fade-in':'fade-out',status]">
      <span>{{message}}</span>
    </div>
  </section>
</template>
<style lang="scss">
@keyframe fade-in {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframe fade-out {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.7);
  }
}

.toaster-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .toaster {
    width: 200px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: #00000066;
    color: white;
    border-radius: 10px;
  }
  .fade-in {
    animation-name: fade-in;
    animation-duration: 0.5s;
    animation-fill-mode: both;
  }
  .fade-out {
    animation-name: fade-out;
    animation-duration: 0.3s;
    animation-fill-mode: both;
  }
  .success {
    background: #82dc14cc;
  }
  .error {
    background: #f16440f5;
  }
}
</style>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      visible: false,
      message: "hello toast",
      status: null
    };
  },
  computed: {},
  components: {}
};
</script>

<style scoped>
</style>
