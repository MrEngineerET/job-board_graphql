import { request, gql } from "graphql-request";

const API_URL = "http://localhost:9000/graphql";

export async function getJobs() {
  const query = gql`
    query {
      jobs {
        id
        title
        description
        companyId
        company {
          id
          name
        }
      }
    }
  `;

  const { jobs } = await request(API_URL, query);
  return jobs;
}

export async function getJob(jobId) {
  const query = gql`
    query ($jobId: ID!) {
      job(jobId: $jobId) {
        id
        title
        description
        company {
          id
          name
        }
      }
    }
  `;
  const res = await request(API_URL, query, { jobId });
  return res.job;
}

export async function getCompany(companyId) {
  const query = gql`
    query ($companyId: ID!) {
      company(companyId: $companyId) {
        id
        name
        description
      }
    }
  `;
  const res = await request(API_URL, query, { companyId });
  return res.company;
}
