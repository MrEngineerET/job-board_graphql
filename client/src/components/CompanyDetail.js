import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getCompany, getCompanyJobs } from "../queries";
import JobList from "./JobList";

function CompanyDetail() {
  const { companyId } = useParams();
  const [company, setCompany] = useState({});
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getCompany(companyId).then(setCompany);
    getCompanyJobs(companyId).then(setJobs);
  }, []);

  return (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
      <div>
        <h2 className="subtitle">Job posted by this company</h2>
        <JobList jobs={jobs} />
      </div>
    </div>
  );
}

export default CompanyDetail;
