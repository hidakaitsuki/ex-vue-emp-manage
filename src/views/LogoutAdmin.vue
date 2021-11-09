<template>
  <div>dubby</div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class LoginAdmin extends Vue {
  /**
   * ログアウトする
   */
  async created(): Promise<void> {
    await axios.get("http://34.221.70.66:8080/ex-emp-api/logout");
    this["$router"].push("/loginAdmin");
  }
}
</script>

<style></style>
