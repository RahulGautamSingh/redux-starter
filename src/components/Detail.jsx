import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Detail() {
  let params = useParams();
  let [loading, setLoading] = useState(true);
  let [company, setCompany] = useState("");
  let [employeeArr, setEmployeeArr] = useState([]);
  let state = useSelector((state) => state);

  useEffect(() => {
    let arr = [];
    for (let index = 0; index < state.companies.length; index++) {
      if (state.companies[index].name === params.id) {
        setCompany(state.companies[index]);
        break;
      }
    }
    state.employees.forEach((element) => {
      if (element.company === params.id) arr.push(element);
    });
    setEmployeeArr(arr);
    setLoading(false);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="detail-container">
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="detail-profile">
          <div className="detail-profile-overview">Profile Overview</div>
          <div className="detail-profile-main">
            <div className="detail-profile-main-left">
              <div className="detail-profile-main-box">
                <p className="detail-profile-main-box-title">Address:</p>
                <p className="detail-profile-main-box-data">
                  {company.address}
                </p>
              </div>
              <div className="detail-profile-main-box">
                <p className="detail-profile-main-box-title">Revenue:</p>
                <p className="detail-profile-main-box-data">
                  {company.revenue}
                </p>
              </div>
              <div className="detail-profile-main-box">
                <p className="detail-profile-main-box-title">Phone:</p>
                <p className="detail-profile-main-box-data">{company.phone}</p>
              </div>
            </div>
            <div className="detail-profile-main-right">
              <div className="detail-profile-main-box">
                <p className="detail-profile-main-box-title">Total Employees:</p>
                <p className="detail-profile-main-box-data">
                  {employeeArr.length}
                </p>
              </div>
            </div>
          </div>
          <div className="detail-profile-bottom"></div>
        </div>
      )}

      {/* {!loading && employeeArr.length===0 && <p>No employees yet.</p>} */}
      {!loading && (
        <div className="detail-employee-list">
          <div className="employee-list-top">Employees</div>
          <div className="employee-list">
            {employeeArr.length === 0 && <p>No employees yet.</p>}
            {employeeArr.length !== 0 &&
              employeeArr.map((elem) => {
                return (
                  <div className="employee-card">
                    <div className="detail-profile-overview">{elem.name}</div>
                    <div className="employee-card-middle">
                      <div className="detail-profile-main-box">
                        <p className="detail-profile-main-box-title">Address:</p>
                        <p className="detail-profile-main-box-data">
                          {company.address}
                        </p>
                      </div>
                    </div>
                    <div className="detail-profile-bottom"></div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}
