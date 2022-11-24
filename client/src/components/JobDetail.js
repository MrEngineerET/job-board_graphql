import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getJob } from "../queries";

function JobDetail() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      getJob(jobId).then(setJob);
    } catch (error) {
      setError(true);
    }
  }, []);

  if (error) return <div>Something went wrong</div>;
  if (!job) return <div>Job loading... </div>;
  return (
    <div>
      <h1 className="title">{job.title}</h1>
      <h2 className="subtitle">
        <Link to={`/companies/${job.company.id}`}>{job.company.name}</Link>
      </h2>
      <div className="box">{job.description}</div>
    </div>
  );
}

export default JobDetail;
