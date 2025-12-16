import StudentList from "./components/StudentList";

const App = () => {
  const students = [
    { id: 1, name: "Nguyen Van A", age: 18 },
    { id: 2, name: "Tran Thi B", age: 19 },
    { id: 3, name: "Le Van C", age: 20 },
  ];

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <StudentList students={students} />
    </div>
  );
};

export default App;
