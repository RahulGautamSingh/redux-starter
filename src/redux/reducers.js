import { ADD_COMPANY, ADD_EMPLOYEE, FETCH_DATA } from "./action_types";

let initialState = {
  companies: [],
  employees: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.payload],
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case FETCH_DATA:
      return {
        companies: action.payload.companies,
        employees: action.payload.employees,
      };
    default:
      return state;
  }
}
