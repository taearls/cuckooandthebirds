<template>
  <div id="loading-spinner" />
</template>

<script>
export default {
  beforeCreate() {
    // change style attribute directly so css in this component can be scoped
    document.body.style.opacity = "75%";
  },
  beforeDestroy() {
    document.body.style.opacity = "1";
  },
};
</script>

<style scoped>
#loading-spinner {
  font-size: 16px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: loading 1s infinite ease;
}

@keyframes loading {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em rgba(220, 38, 38, 1), 1.8em -1.8em 0 0em rgba(220, 38, 38, 0.2),
      2.5em 0em 0 0em rgba(220, 38, 38, 0.2), 1.75em 1.75em 0 0em rgba(220, 38, 38, 0.2),
      0em 2.5em 0 0em rgba(220, 38, 38, 0.2), -1.8em 1.8em 0 0em rgba(220, 38, 38, 0.2),
      -2.6em 0em 0 0em rgba(220, 38, 38, 0.5), -1.8em -1.8em 0 0em rgba(220, 38, 38, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(220, 38, 38, 0.7), 1.8em -1.8em 0 0em rgba(220, 38, 38, 1),
      2.5em 0em 0 0em rgba(220, 38, 38, 0.2), 1.75em 1.75em 0 0em rgba(220, 38, 38, 0.2),
      0em 2.5em 0 0em rgba(220, 38, 38, 0.2), -1.8em 1.8em 0 0em rgba(220, 38, 38, 0.2),
      -2.6em 0em 0 0em rgba(220, 38, 38, 0.2), -1.8em -1.8em 0 0em rgba(220, 38, 38, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(220, 38, 38, 0.5),
      1.8em -1.8em 0 0em rgba(220, 38, 38, 0.7), 2.5em 0em 0 0em rgba(220, 38, 38, 1),
      1.75em 1.75em 0 0em rgba(220, 38, 38, 0.2), 0em 2.5em 0 0em rgba(220, 38, 38, 0.2),
      -1.8em 1.8em 0 0em rgba(220, 38, 38, 0.2), -2.6em 0em 0 0em rgba(220, 38, 38, 0.2),
      -1.8em -1.8em 0 0em rgba(220, 38, 38, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(220, 38, 38, 0.2),
      1.8em -1.8em 0 0em rgba(220, 38, 38, 0.5), 2.5em 0em 0 0em rgba(220, 38, 38, 0.7),
      1.75em 1.75em 0 0em rgba(220, 38, 38, 1), 0em 2.5em 0 0em rgba(220, 38, 38, 0.2),
      -1.8em 1.8em 0 0em rgba(220, 38, 38, 0.2), -2.6em 0em 0 0em rgba(220, 38, 38, 0.2),
      -1.8em -1.8em 0 0em rgba(220, 38, 38, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(220, 38, 38, 0.2),
      1.8em -1.8em 0 0em rgba(220, 38, 38, 0.2), 2.5em 0em 0 0em rgba(220, 38, 38, 0.5),
      1.75em 1.75em 0 0em rgba(220, 38, 38, 0.7), 0em 2.5em 0 0em rgba(220, 38, 38, 1),
      -1.8em 1.8em 0 0em rgba(220, 38, 38, 0.2), -2.6em 0em 0 0em rgba(220, 38, 38, 0.2),
      -1.8em -1.8em 0 0em rgba(220, 38, 38, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(220, 38, 38, 0.2),
      1.8em -1.8em 0 0em rgba(220, 38, 38, 0.2), 2.5em 0em 0 0em rgba(220, 38, 38, 0.2),
      1.75em 1.75em 0 0em rgba(220, 38, 38, 0.5), 0em 2.5em 0 0em rgba(220, 38, 38, 0.7),
      -1.8em 1.8em 0 0em rgba(220, 38, 38, 1), -2.6em 0em 0 0em rgba(220, 38, 38, 0.2),
      -1.8em -1.8em 0 0em rgba(220, 38, 38, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(220, 38, 38, 0.2),
      1.8em -1.8em 0 0em rgba(220, 38, 38, 0.2), 2.5em 0em 0 0em rgba(220, 38, 38, 0.2),
      1.75em 1.75em 0 0em rgba(220, 38, 38, 0.2), 0em 2.5em 0 0em rgba(220, 38, 38, 0.5),
      -1.8em 1.8em 0 0em rgba(220, 38, 38, 0.7), -2.6em 0em 0 0em rgba(220, 38, 38, 1),
      -1.8em -1.8em 0 0em rgba(220, 38, 38, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(220, 38, 38, 0.2),
      1.8em -1.8em 0 0em rgba(220, 38, 38, 0.2), 2.5em 0em 0 0em rgba(220, 38, 38, 0.2),
      1.75em 1.75em 0 0em rgba(220, 38, 38, 0.2), 0em 2.5em 0 0em rgba(220, 38, 38, 0.2),
      -1.8em 1.8em 0 0em rgba(220, 38, 38, 0.5), -2.6em 0em 0 0em rgba(220, 38, 38, 0.7),
      -1.8em -1.8em 0 0em rgba(220, 38, 38, 1);
  }
}
</style>
