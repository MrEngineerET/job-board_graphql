import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getCompany } from "../queries";

function CompanyDetail() {
  const { companyId } = useParams();
  const [company, setCompany] = useState({});
  useEffect(() => {
    getCompany(companyId).then(setCompany);
  }, []);

  return (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
    </div>
  );
}

export default CompanyDetail;
