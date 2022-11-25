import { Job, Company } from "./db.js";

export default {
  Query: {
    jobs: () => Job.findAll(),
    job: (parent, { jobId }) => Job.findById(jobId),
    company: (parent, { companyId }) => Company.findById(companyId),
  },
  Mutation: {
    createJob: (parent, { input }) => Job.create(input),
    deleteJob: (parent, { jobId }) => Job.delete(jobId),
    updateJob: (parent, { input }) => Job.update(input),
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
