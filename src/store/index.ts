/**
 * 従業員情報をもたせるstoreファイル.
 */

import Vue from "vue";
import Vuex from "vuex";
import { Employee } from "../types/employee";
import axsios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    totalEmployeeCount: 0,
    employees: new Array<Employee>(),
  }, // end state
  /**
   * @param getEmployeeList 従業員一覧情報をWebAPI から取得してmutationを呼び出す.
   */
  actions: {
    async getEmployeeList(context, payload) {
      const responce = await axsios.get(
        "http://34.220.87.88/ex-emp-api/employee/employees"
      );
      payload = responce.data;
      context.commit("showEmoloyeeList", payload);
    },
  }, // end actions
  /**
   * @param showEmployeeList 従業員一覧情報を作成してstateに格納する.
   */
  mutations: {
    showEmployeeList(state, payload) {
      state.totalEmployeeCount = payload.totalEmployeeCount;
      for (const employee of payload.employees) {
        state.employees.push(
          new Employee(
            employee.id,
            employee.name,
            employee.image,
            employee.gender,
            employee.hireDate,
            employee.mailAddress,
            employee.zipCode,
            employee.address,
            employee.telephone,
            employee.salary,
            employee.characteristics,
            employee.dependentsCount
          )
        );
      }
    },
  }, // end mutations
  /**
   * @param getEmployeeCount - 従業員数を返す.
   * @param getEmployees - 従業員一覧を返す.
   * @param getEmployeeById - IDから従業員を検索し返す.
   */
  getters: {
    getEmployeeCount(state) {
      return state.totalEmployeeCount;
    },
    getEmployees(state) {
      return state.employees;
    },
    getEmployeeById(state) {
      return (id: number) => {
        return state.employees.filter((Employee) => (Employee.id = id))[0];
      };
    },
  }, // end getters
  modules: {}, // end modules
});
