import { Job, Company } from "./db.js";

export default {
  Query: {
    jobs: () => Job.findAll(),
    job: (parent, { jobId }) => Job.findById(jobId),
    company: (parent, { companyId }) => Company.findById(companyId),
  },
  Mutation: {
    createJob: (parent, { title, companyId, description }) =>
      Job.create({ title, companyId, description }),
  },
  Job: {
    company: ({ companyId }) => {
      return Company.findById(companyId);
    },
  },
  Company: {
    jobs: (parent) => Job.findAll((job) => job.companyId === parent.id),
  },
};
