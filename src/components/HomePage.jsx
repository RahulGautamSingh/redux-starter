//started at 12.18
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCompany, addEmployee, fetchData } from "../redux/actions";

import CompanyCard from "./CompanyCard";
export default function HomePage() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let [companyNameErr, setCompanyNameErr] = useState(null);
  let [companyAddErr, setCompanyAddErr] = useState(null);
  let [companyRevErr, setCompanyRevErr] = useState(null);
  let [companyPhoneErr, setCompanyPhoneErr] = useState(null);
  let [employeeNameErr, setEmployeeNameErr] = useState(null);
  let [employeeAddErr, setEmployeeAddErr] = useState(null);
  let [employeeCompanyErr, setEmployeeCompanyErr] = useState(null);
  let [companyName, setCompanyName] = useState(null);
  let [companyAdd, setCompanyAdd] = useState(null);
  let [companyRev, setCompanyRev] = useState(null);
  let [companyPhone, setCompanyPhone] = useState(null);
  let [employeeName, setEmployeeName] = useState(null);
  let [employeeAdd, setEmployeeAdd] = useState(null);
  let [employeeCompany, setEmployeeCompany] = useState(null);
  let [loading, setLoading] = useState(true);
  function validateCompany() {
    if (
      companyNameErr === "" &&
      companyAddErr === "" &&
      companyRevErr === "" &&
      companyPhoneErr === "" &&
      companyNameErr !== null &&
      companyAddErr !== null &&
      companyRevErr !== null &&
      companyPhoneErr !== null
    )
      return true;
    return false;
  }

  function validateEmployee() {
    if (
      employeeAddErr === "" &&
      employeeAddErr === "" &&
      employeeCompanyErr === "" &&
      employeeAddErr !== null &&
      employeeAddErr !== null &&
      employeeCompanyErr !== null
    )
      return true;
    return false;
  }
  useEffect(() => {
    let companies = JSON.parse(localStorage.getItem("companies"));
    let employees = JSON.parse(localStorage.getItem("employees"));
    if (companies === null) companies = [];
    if (employees === null) employees = [];
    dispatch(fetchData({ companies: companies, employees: employees }));
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="left">
          <div className="left-main">
          <div className="title">Companies</div>
          <div className="main">
            {state.companies.length === 0 && <p>No Companies added yet.</p>}
            {state.companies.length !== 0 &&
              state.companies.map((elem) => {
                return <CompanyCard company={elem} />;
              })}
          </div>
          </div>
        </div>
      )}
      {!loading && (
        <div className="right">
          <div className="form-company">
            <div className="header">Create new Company</div>
            <div className="form-body">
              <label htmlFor="companyName">
                Name
                <br />
                <input
                  type="text"
                  name="companyName"
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                    if (e.target.value === "")
                      setCompanyNameErr("Cannot be blank");
                    else {
                      setCompanyNameErr("");
                    }
                  }}
                />
                <span className="error">{companyNameErr}</span>
              </label>
              <label htmlFor="companyAddress">
                Address
                <br />
                <input
                  type="text"
                  name="companyAddress"
                  onChange={(e) => {
                    setCompanyAdd(e.target.value);
                    if (e.target.value === "")
                      setCompanyAddErr("Cannot be blank");
                    else setCompanyAddErr("");
                  }}
                />
                <span className="error">{companyAddErr}</span>
              </label>
              <label htmlFor="companyRevenue">
                Revenue
                <br />
                <input
                  type="number"
                  name="companyRevenue"
                  min="0"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setCompanyRev(e.target.value);
                    if (e.target.value === "0" || e.target.value === "")
                      setCompanyRevErr("Cannot be zero");
                    else setCompanyRevErr("");
                  }}
                />
                <span className="error">{companyRevErr}</span>
              </label>
              <label htmlFor="companyPhone">
                Phone
                <br />
                <input
                  type="number"
                  name="companyPhone"
                  onChange={(e) => {
                    setCompanyPhone(e.target.value);
                    if (e.target.value === "")
                      setCompanyPhoneErr("Cannot be blank");
                    else setCompanyPhoneErr("");
                  }}
                />
                <span className="error">{companyPhoneErr}</span>
              </label>
            </div>

            <button
              className="create-company-btn"
              onClick={() => {
                if (validateCompany()) {
                  localStorage.setItem(
                    "companies",
                    JSON.stringify([
                      ...state.companies,
                      {
                        name: companyName,
                        address: companyAdd,
                        revenue: companyRev,
                        phone: companyPhone,
                      },
                    ])
                  );
                  dispatch(
                    addCompany({
                      name: companyName,
                      address: companyAdd,
                      revenue: companyRev,
                      phone: companyPhone,
                    })
                  );
                }
              }}
            >
              Save
            </button>
          </div>
          <div className="form-employee">
            <div className="header">Create new Employee</div>
            <div className="form-body">
              <label htmlFor="employeeName">
                Name
                <br />
                <input
                  type="text"
                  name="employeeName"
                  onChange={(e) => {
                    setEmployeeName(e.target.value);
                    if (e.target.value === "")
                      setEmployeeNameErr("Cannot be blank");
                    else setEmployeeNameErr("");
                  }}
                  disabled={state.companies.length ? false : true}
                />
                <span className="error">{employeeNameErr}</span>
              </label>
              <label htmlFor="employeeAddress">
                Address
                <br />
                <input
                  type="text"
                  name="employeeAddress"
                  onChange={(e) => {
                    setEmployeeAdd(e.target.value);
                    if (e.target.value === "")
                      setEmployeeAddErr("Cannot be blank");
                    else setEmployeeAddErr("");
                  }}
                  disabled={state.companies.length ? false : true}
                />
                <span className="error">{employeeAddErr}</span>
              </label>
              <label htmlFor="employeeCompany">Company<br/>
              <select
                name="employeeCompany"
                id="employeeCompany"
                disabled={state.companies.length ? false : true}
                onChange={(e) => {
                  console.log(e.target.value);
                  setEmployeeCompany(e.target.value);
                  if (e.target.value === "")
                    setEmployeeCompanyErr("Cannot be blank");
                  else setEmployeeCompanyErr("");
                }}
              >
                {state.companies.map((elem, index) => {
                
                  return <option value={elem.name}>{elem.name}</option>;
                })}
              </select>
              
              <span className="error">{employeeCompanyErr}</span>
              </label>
            </div>

            <button
              className="create-employee-btn"
              disabled={state.companies.length ? false : true}
              onClick={() => {
                if (validateEmployee()) {
                  localStorage.setItem(
                    "employees",
                    JSON.stringify([
                      ...state.employees,
                      {
                        name: employeeName,
                        address: employeeAdd,
                        company: employeeCompany,
                      },
                    ])
                  );
                  dispatch(
                    addEmployee({
                      name: employeeName,
                      address: employeeAdd,
                      company: employeeCompany,
                    })
                  );
                } else
                  console.log({
                    name: employeeName,
                    address: employeeAdd,
                    company: employeeCompany,
                  });
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
