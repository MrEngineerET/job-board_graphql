import { Link } from "react-router-dom";
import propTypes from "prop-types";

function JobItem({ job }) {
  const title = job.company ? `${job.title} at ${job.company.name}` : job.title;
  return (
    <li className="media">
      <div className="media-content">
        <Link to={`/jobs/${job.id}`}>{title}</Link>
      </div>
    </li>
  );
}

JobItem.propTypes = {
  job: propTypes.object.isRequired,
};

function JobList({ jobs }) {
  return (
    <ul className="box">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
}

JobList.propTypes = {
  jobs: propTypes.array,
};

export default JobList;
