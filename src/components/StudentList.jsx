const StudentList = ({ students }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên</th>
          <th>Tuổi</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
