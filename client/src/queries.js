import { request, gql } from "graphql-request";

const API_URL = "http://localhost:9000/graphql";

export async function createJob(data) {
  const query = gql`
    mutation createJobMutation($input: CreateJobInput!) {
      job: createJob(input: $input) {
        id
        title
        description
      }
    }
  `;
  const res = await request(API_URL, query, { input: data });
  return res.job;
}

export async function deleteJob(jobId) {
  const query = gql`
    mutation deleteJobMutation($jobId: ID!) {
      job: deleteJob(jobId: $jobId) {
        id
        title
      }
    }
  `;
  const res = await request(API_URL, query, { jobId });
  return res.job;
}

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

export async function getCompanyJobs(companyId) {
  const query = gql`
    query ($companyId: ID!) {
      company(companyId: $companyId) {
        jobs {
          id
          title
        }
      }
    }
  `;
  const res = await request(API_URL, query, { companyId });
  return res.company.jobs;
}
