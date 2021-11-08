<template>
  <div>
    <div class="container">
      <div>従業員数:10人</div>
      <div class="row">
        <table class="striped">
          <thead>
            <tr>
              <th>名前</th>
              <th>入社日</th>
              <th>扶養人数</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Employee } from "@/types/employee";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class EmployeeList extends Vue {
  // ID
  private id = 0;
  // 名前
  private name = "";
  // 画像
  private image = "";
  // 性別
  private gender = "";
  // 入社日
  private hireDate = new Date();
  // メールアドレス
  private mailAddress = "";
  // 郵便番号
  private zipCode = "";
  // 住所
  private address = "";
  // 電話番号
  private telephone = "";
  // 給料
  private salary = 0;
  // 特性
  private characteristics = "";
  // 扶養人数
  private dependentsCount = 0;
  /**
   * Vuexストアのアクション経由で非同期でWebAPI から従業員一覧を取得する.
   */
  created(): void {
    this["$store"].dispatch("getEmployeeList", {
      employee: new Employee(
        this.id,
        this.name,
        this.image,
        this.gender,
        this.hireDate,
        this.mailAddress,
        this.zipCode,
        this.address,
        this.telephone,
        this.salary,
        this.characteristics,
        this.dependentsCount
      ),
    });
  }
  /**
   * 非同期で取得したVuexストア内の従業員数を取得し返す
   */
  get employeeCount(): number {
    return this["$store"].getters("getEmployeeCount");
  }
  /**
   * 非同期で取得したVuexストア内の従業員一覧を取得し返す
   * */
  get employees(): Array<Employee> {
    return this["$store"].getters("getEmployees");
  }
}
</script>

<style></style>
