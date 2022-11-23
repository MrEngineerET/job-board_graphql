import { Job } from "./db.js";

export default {
  Query: {
    jobs: () => Job.findAll(),
  },
};
