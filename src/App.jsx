function App() {
  const ten = "Nguyen Van Thanh";
  const tuoi = 20;
  const ngheNghiep = "Sinh vien";
  const soThich = ["Doc sach", "Choi game", "Lap trinh"];

  return (
    <div style={{ padding: "20px", fontSize: "20px" }}>
      <h1>Thong tin ca nhan</h1>

      <p><b>Ten:</b> {ten}</p>
      <p><b>Tuoi:</b> {tuoi}</p>
      <p><b>Nghe nghiep:</b> {ngheNghiep}</p>

      <p>
        <b>So thich:</b> {soThich.join(", ")}
      </p>
    </div>
  );
}

export default App;
