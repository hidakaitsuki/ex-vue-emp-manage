<template>
  <div>
    <div class="container">
      <div class="row register-page">
        <div class="error">{{ errorMessage }}</div>
        <form class="col s12" id="reg-form" action="login.html">
          <div class="row">
            <div class="input-field col s6">
              <input
                id="last_name"
                type="text"
                class="validate"
                v-model="lastName"
                required
              />
              <label for="last_name">姓</label>
            </div>
            <div class="input-field col s6">
              <input
                id="first_name"
                type="text"
                class="validate"
                v-model="firstName"
                required
              />
              <label for="first_name">名</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="email"
                type="email"
                class="validate"
                v-model="mailAddress"
                required
              />
              <label for="email">メールアドレス</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="password"
                type="password"
                class="validate"
                minlength="8"
                v-model="password"
                required
              />
              <label for="password">パスワード</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <button
                class="btn btn-large btn-register waves-effect waves-light"
                type="button"
                v-on:click="registerAdmin()"
              >
                登録
                <i class="material-icons right">done</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class RegisterAdmin extends Vue {
  // エラーメッセージ
  private errorMessage = "";
  //   姓
  private lastName = "";
  //   名
  private firstName = "";
  //   メールアドレス
  private mailAddress = "";
  //   パスワード
  private password = "";

/**
 * 管理者情報を登録する.
 */
  async registerAdmin(): Promise<void> {
    const response = await axios.post(
      "http://34.221.70.66:8080/ex-emp-api/insert",
      {
        name: this.lastName + " " + this.firstName,
        mailAddress: this.mailAddress,
        password: this.password,
      }
    );
    if (response.data.status == "success") {
      this["$router"].push("/loginAdmin");
    } else if (response.data.status == "error") {
      this.errorMessage = response.data.message;
    }
  }
}
</script>

<style scoped>
.register-page {
  width: 600px;
}
</style>
