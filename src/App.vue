<template>
  <div id="app">
    <transition name="trans" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

.trans-enter {
  opacity: 0.65;
}

.trans-enter-to {
  opacity: 1;
}

.trans-enter-active {
  transition: 0.4s ease-in;
}

.trans-leave-to {
  opacity: 0.75;
}

.trans-leave {
  opacity: 1;
}

.trans-leave-active {
  transition: 0.2s ease-out;
}
</style>
