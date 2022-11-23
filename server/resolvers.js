import { Job, Company } from "./db.js";

export default {
  Query: {
    jobs: () => Job.findAll(),
    job: (parent, { jobId }) => Job.findById(jobId),
  },
  Job: {
    company: ({ companyId }) => {
      return Company.findById(companyId);
    },
  },
};
