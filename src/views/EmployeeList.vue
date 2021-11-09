<template>
  <div>
    <div class="container">
      <div>{{ getEmployeeCount }}</div>
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
            <tr v-for="employee of getEmployees" v-bind:key="employee.id">
              <td>
                <router-link :to="'/employeeDetail/' + employee.id">
                  {{ employee.name }}
                </router-link>
              </td>
              <td>{{ employee.hireDate }}</td>
              <td>{{ employee.dependentsCount }}</td>
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
  /**
   * Vuexストアのアクション経由で非同期でWebAPI から従業員一覧を取得する.
   */
  created(): void {
      
    this["$store"].dispatch("getEmployeeList");
  }
  /**
   * 非同期で取得したVuexストア内の従業員数を取得し返す.
   */
  get getEmployeeCount(): number {
    return this["$store"].getters.getEmployeeCount;
  }
  /**
   * 非同期で取得したVuexストア内の従業員一覧を取得し返す.
   * */
  get getEmployees(): Array<Employee> {
    return this["$store"].getters.getEmployees;
  }
}
</script>

<style></style>
