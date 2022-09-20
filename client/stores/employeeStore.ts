import { defineStore } from "pinia";
import employeeService from "~/services/employeeService";

interface Employee {
  id: number;
  lastname: string;
  firstname: string;
}

export const employeeStore = defineStore("employee", {
  state: () => {
    return {
      employee: null as Employee | null,
      employees: [] as Employee[],
    };
  },
  getters: {
    getCurrentEmployee(): Employee {
      return this.employee;
    },
    getListOfEmployees(): Employee[] {
      return this.employees;
    },
  },
  actions: {
    fetchEmployees() {
      this.employees = employeeService.fetchEmployees();
    },
  },
});
