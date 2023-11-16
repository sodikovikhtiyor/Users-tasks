import { Route, Routes } from "react-router-dom";
import "./App.css";
import Tasks from "./Tasks";
import Users from "./Users";

function App() {
  return (
    <Routes>
      <Route index element={<Users />} />
      <Route path="/:userId" element={<Tasks />} />
    </Routes>
  );
}

export default App;
