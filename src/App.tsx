import "./index.css";
import UserLogin from "./Components/UserLogin";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowList from "./Components/showList";
import PersonalInfo from "./Components/PersonalInfo";
import PersonalInformation from "./Components/PersonalInfo";
import Home from "./Components/home";
import HomeRoute from "./routes/HomeRoute";
import AcademicDetail from "./Components/AcadmicDetail";
import AddressDetail from "./Components/AddressDetails";

export default function App() {
  return (
    <>
 
      <BrowserRouter>
     <Routes>
        <Route path="/show" element={<ShowList />} />
          <Route path="/" element={<PersonalInformation />} />
          <Route path="/:id" element={<PersonalInformation />} />
          </Routes>

      </BrowserRouter>
    </>
  );
}
