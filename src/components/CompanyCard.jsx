import { useHistory } from "react-router-dom";

export default function CompanyCard(props) {
  let history = useHistory();
  return (
    <div className="company-card">
      <div className="top">{props.company.name}</div>
      <div className="middle">
        <div className="bubble">
        <p className="title-company">Address:</p>
        <p className="data">{props.company.address}</p>
        </div>
        <div className="bubble">
        <p className="title-company">Revenue:</p>
        <p className="data">{props.company.revenue}</p>
        </div>
        <div className="bubble">
        <p className="title-company">Phone:</p>
        <p className="data">{props.company.phone}</p>
        </div>
     
      </div>
      <div className="bottom">
        <p
          onClick={() => {
            history.push( props.company.name);
          }}
          className="link-btn"
        >Company Overview</p>
      </div>
    </div>
  );
}
