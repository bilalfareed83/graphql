import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_STUDENTS = gql`
  query GetAllStudents {
    students {
      name
      email
    }
  }
`;
const Students = () => {
  const { loading, error, data } = useQuery(GET_STUDENTS);

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
    </>
  );
};

export default Students;
