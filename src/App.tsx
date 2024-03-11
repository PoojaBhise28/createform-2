import "./index.css";
import UserLogin from "./Components/UserLogin";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowList from "./Components/showList";
import PersonalInfo from "./Components/PersonalInfo";
import PersonalInformation from "./Components/PersonalInfo";
import Home from "./Components/home";

export default function App() {
  return (
    <>
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<PersonalInformation rowData={null} />} /> */}
          {/* <Route path="/show" element={<ShowList />} /> */}

          <Route path="/show" element={<ShowList />} />
          <Route path="/" element={<PersonalInformation />} />
          <Route path="/:id" element={<PersonalInformation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
