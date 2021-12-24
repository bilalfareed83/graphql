const { ApolloServer, gql } = require("apollo-server");

const students = [
  { id: 1, name: "Bilal", email: "b@gmail.com", age: 37 },
  { id: 2, name: "Danish", email: "d@gmail.com", age: 38 },
  { id: 3, name: "Simi", email: "c@gmail.com", age: 33 },
];

const typeDefs = gql`
  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }

  input studentInput {
    id: Int
    name: String
    email: String
    age: Int
  }

  type Query {
    students: [Student]
  }

  type Mutation {
    addStudent(input: studentInput): Student
  }
`;

const resolvers = {
  Query: {
    students: () => students,
  },
  Mutation: {
    addStudent(_, { input }) {
      console.log(input);
      students.push({
        id: input.id,
        name: input.name,
        email: input.email,
        age: input.age,
      });
      return input;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
