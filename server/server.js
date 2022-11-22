import cors from "cors";
import express from "express";
import { expressjwt } from "express-jwt";
import jwt from "jsonwebtoken";
import { User, Job } from "./db.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

const PORT = 9000;
// eslint-disable-next-line no-undef
const JWT_SECRET = Buffer.from("Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt", "base64");

const app = express();
app.use(
  cors(),
  express.json(),
  expressjwt({
    algorithms: ["HS256"],
    credentialsRequired: false,
    secret: JWT_SECRET,
  })
);

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne((user) => user.email === email);
  if (user && user.password === password) {
    const token = jwt.sign({ sub: user.id }, JWT_SECRET);
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
});

const typeDefs = `#graphql
  type Query {
    jobs:[Jobs]
  }

  type Jobs {
    title: String!
    companyId: ID!
    description: String
  }
`;
const resolvers = {
  Query: {
    jobs: () => Job.findAll(),
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();

//instegrate apollo graphql to express
app.use("/graphql", expressMiddleware(apolloServer));

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
});
