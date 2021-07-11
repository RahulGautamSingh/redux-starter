import { ADD_COMPANY, ADD_EMPLOYEE , FETCH_DATA} from "./action_types";

export const addCompany = (companyObj) => ({
  type: ADD_COMPANY,
  payload: companyObj,
});
export const addEmployee = (employeeObj) => ({
  type: ADD_EMPLOYEE,
  payload: employeeObj,
});

export const fetchData = (obj) => ({
type:FETCH_DATA,
payload:obj
})