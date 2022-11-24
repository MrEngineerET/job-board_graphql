import { useState, useEffect } from "react";
import JobList from "./JobList";
import { getJobs } from "../queries";

getJobs();

function JobBoard() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    getJobs()
      .then(setJobs)
      .catch(() => {
        setError(false);
      });
  }, []);

  return (
    <>
      {error ? (
        <div>Something went wrong...</div>
      ) : (
        <div>
          <h1 className="title">Job Board</h1>
          <JobList jobs={jobs} />
        </div>
      )}
    </>
  );
}

export default JobBoard;
