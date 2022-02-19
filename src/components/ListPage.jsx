import React, { useEffect, useState } from "react";
import Students from "./details/Students";
import Student from "./student/Student";

export default function ListPage() {
  const [books, setBooks] = useState([]);
  const [students, setStudents] = useState([]);
  const [clickedRecord, setClickedRecord] = useState(null);

  useEffect(() => {
    const studentsRecords = async () => {
      try {
        const res = await fetch("http://localhost:5000/students");
        const jsonData = await res.json();
        if (jsonData) setStudents(jsonData);
      } catch (err) {
        console.log(err);
      }
    };
    studentsRecords();
  });

  useEffect(() => {
    const booksRecords = async () => {
      try {
        const res = await fetch("http://localhost:5000/books");
        const jsonData = await res.json();

        if (jsonData) setBooks(jsonData);
      } catch (err) {
        console.log(err);
      }
    };
    booksRecords();
  }, []);

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          margin: "0px",
          padding: "0px",
          width: "100vw",
          height: "100vh",

          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          className="students"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>Student Details</h1>
          <div style={{ flex: "3" }}>
            {
              <Students
                students={students}
                setClicked={(e) => setClickedRecord(e)}
              />
            }
          </div>
          <div style={{ flex: "5" }}>
            {clickedRecord && (
              <Student
                cstudent={clickedRecord}
                setCstudent={(e) => setClickedRecord(e)}
              />
            )}
          </div>
        </div>
        <div className="books" style={{ flex: "10" }}>
          Books
        </div>
      </div>
    </>
  );
}
