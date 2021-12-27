import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

const GET_STUDENTS = gql`
  query GetAllStudents {
    students {
      name
      email
    }
  }
`;

const ADD_STUDENT = gql`
  mutation AddStd($id: Int, $name: String!, $email: String!, $age: Int) {
    addStudent(input: { id: $id, name: $name, email: $email, age: $age }) {
      id
      name
    }
  }
`;

const Students = () => {
  const obj = { id: 6, name: "qasim", email: "q@gmail.com", age: 9 };
  const { loading, error, data } = useQuery(GET_STUDENTS);

  const [addStudentFunc] = useMutation(ADD_STUDENT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  //   console.log(data);
  return (
    <>
      <h2>Students List</h2>
      <tr>
        <td>Name</td>
        <td>Email</td>
      </tr>
      {data.students.map((student, ind) => {
        return (
          <tr key={ind}>
            <td>{student.name}</td>
            <td>{student.email}</td>
          </tr>
        );
      })}
      <button
        onClick={() => {
          addStudentFunc({
            variables: { id: 6, name: "qasim", email: "q@gmail.com", age: 9 },
          });
        }}
      >
        Add Student
      </button>
    </>
  );
};

export default Students;
