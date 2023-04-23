<template>
  <TheNavbar :contents="contents" />
  <router-view />
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";

export default {
  name: "App",
  data() {
    return {
      contents: [
        { pathname: "EGCO427", path: "/" },
        { pathname: "Home", path: "/" },
      ],
    };
  },
  components: {
    TheNavbar,
  },
};
</script>
