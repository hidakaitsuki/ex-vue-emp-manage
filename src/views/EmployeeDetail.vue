<template>
  <div>
    <div class="container">
      <div class="row">
        <form action="employeeList.html">
          <fieldset>
            <legend>従業員情報</legend>
            <table>
              <tr>
                <th nowrap>従業員名</th>
                <td>
                  <span>{{ currentEmployee.name }}</span>
                </td>
              </tr>
              <tr>
                <th nowrap>写真</th>
                <td>
                  <img v-bind:src="currentEmployeeImage" />
                </td>
              </tr>
              <tr>
                <th nowrap>性別</th>
                <td>
                  <span>{{ currentEmployee.gender }}</span>
                </td>
              </tr>
              <tr>
                <th nowrap>入社日</th>
                <td>
                  <span>{{ currentEmployee.hireDate }}</span>
                </td>
              </tr>
              <tr>
                <th nowrap>メールアドレス</th>
                <td>
                  <span>{{ currentEmployee.mailAddress }}</span>
                </td>
              </tr>
              <tr>
                <th nowrap>郵便番号</th>
                <td>
                  <span>{{ currentEmployee.zipCode }}</span>
                </td>
              </tr>
              <tr>
                <th nowrap>住所</th>
                <td>
                  <span>{{ currentEmployee.address }}</span>
                </td>
              </tr>
              <tr>
                <th nowrap>電話番号</th>
                <td>
                  <span>{{ currentEmployee.telephone }}</span>
                </td>
              </tr>
              <tr>
                <th nowrap>給料</th>
                <td>
                  <span>{{ currentEmployee.salary }}</span>
                </td>
              </tr>
              <tr>
                <th nowrap>特性</th>
                <td>
                  <span>{{ currentEmployee.characteristics }}</span>
                </td>
              </tr>
              <tr>
                <th nowrap>扶養人数</th>
                <td>
                  <div class="input-field col s12">
                    <div class="error">{{ errorMessage }}</div>
                    <input
                      id="dependentsCount"
                      type="text"
                      class="validate"
                      value="3"
                      required
                    />
                    <label for="dependentsCount2">扶養人数</label>
                  </div>
                </td>
              </tr>
            </table>

            <button class="btn btn-register waves-effect waves-light">
              更新
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Employee } from "@/types/employee";
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class EmployeeDetail extends Vue {
  // 対象の従業員オブジェクト
  private currentEmployee!: Employee;
  // エラーメッセージ
  private errorMessage = "";
  // 対象の従業員のimageパス
  private currentEmployeeImage = "";
  // 対象の従業員の扶養人数
  private currentDependentsCount = 0;

  created(): void {
    const employeeId = parseInt(this["$route"].params.id);

    this.currentEmployee = this["$store"].getters.getEmployeeById(employeeId);

    this.currentEmployeeImage =
      "http://34.221.70.66:8080/ex-emp-api/img/" + this.currentEmployee.image;
    this.currentDependentsCount = this.currentEmployee.dependentsCount;
  }
}
</script>

<style></style>
