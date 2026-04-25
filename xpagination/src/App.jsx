import { useEffect, useState } from "react";

function App() {
  const [personsData, setPersonsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;

  const fetchApiData = async () => {
    try {
      let persons = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
      );
      let personsJson = await persons.json();
      setPersonsData(personsJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = personsData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(personsData.length / rowsPerPage);

  return (
    <div>
      <h1>Employee Data Table</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>{person.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>{currentPage}</span>

        <button
          onClick={() =>
            setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
