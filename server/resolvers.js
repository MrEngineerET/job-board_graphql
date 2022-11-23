import { Job, Company } from "./db.js";

export default {
  Query: {
    jobs: () => Job.findAll(),
  },
  Jobs: {
    company: ({ companyId }) => {
      return Company.findById(companyId);
    },
  },
};
