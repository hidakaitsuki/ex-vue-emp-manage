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
    // 従業員数
    totalEmployeeCount: 0,
    // 従業員一覧
    employees: new Array<Employee>(),
  }, // end state
  actions: {
    /**
     * WebAPIから従業員情報を取得する.
     *
     * @remarks
     * 従業員一覧情報をWebAPI から取得してmutationを呼び出す。
     *
     * @param context - コンテキストオブジェト
     * @param payload - JSON形式の従業員情報
     */
    async getEmployeeList(context, payload) {
      const responce = await axsios.get(
        "http://34.221.70.66:8080/ex-emp-api/employee/employees"
      );
      payload = responce.data;
      context.commit("showEmployeeList", payload);
    },
  }, // end actions
  mutations: {
    /**
     * 従業員数と従業員一覧をstateに格納する.
     *
     * @param state - ステートオブジェクト
     * @param payload - JSON形式の従業員情報
     */
    showEmployeeList(state, payload) {
      state.totalEmployeeCount = payload.totalEmployeeCount;
      state.employees = payload.employees;
      // ↑のでやることによって戻る押したときに再度追加されない
      // for (const employee of payload.employees) {
      //   state.employees.push(
      //     new Employee(
      //       employee.id,
      //       employee.name,
      //       employee.image,
      //       employee.gender,
      //       employee.hireDate,
      //       employee.mailAddress,
      //       employee.zipCode,
      //       employee.address,
      //       employee.telephone,
      //       employee.salary,
      //       employee.characteristics,
      //       employee.dependentsCount
      //     )
      //   );
      // }
    },
  }, // end mutations
  // /**
  //  * @param getEmployeeCount - 従業員数を返す.
  //  * @param getEmployees - 従業員一覧を返す.
  //  * @param getEmployeeById - IDから従業員を検索し返す.
  //  */
  getters: {
    /**
     * 従業員数を返す.
     *
     * @param state - ステートオブジェクト
     * @returns 従業員数
     */
    getEmployeeCount(state) {
      return state.totalEmployeeCount;
    },
    /**
     *従業員情報を返す.
     * @param state -ステートオブジェクト
     * @returns 従業員
     */
    getEmployees(state) {
      return state.employees;
    },
    /**
     * 入力されたIDの従業員情報を返す.
     *
     * @param state ステートオブジェクト
     * @returns 渡されたIDで絞り込む
     */
    getEmployeeById(state) {
      return (id: number) => {
        return state.employees.filter((employee) => employee.id == id)[0];
      };
    },
  }, // end getters
  modules: {}, // end modules
});
