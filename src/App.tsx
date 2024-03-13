import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonalInformation from "./Components/PersonalInfo";
import UserLogin from "./Components/UserLogin";
import HomeRoute from "./routes/HomeRoute";
import AcademicDetail from "./Components/AcadmicDetail";
import AddressDetail from "./Components/AddressDetails";
import ShowList from "./Components/showList";
import ExperienceDetails from "./Components/ExperienceDetails";
import EmploymentDetails from "./Components/EmploymentDetails";
import Logout from "./Components/LogOut";
import Home from "./Components/home";
import Layout from "./Components/Layout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/personalInfo" element={<PersonalInformation />} />
            <Route path="/personalInfo/:id" element={<PersonalInformation />} />

            <Route path="/AcademicInfo" element={<AcademicDetail />}></Route>
            <Route path="/AddressDetail" element={<AddressDetail />}></Route>
            <Route path="/showList" element={<ShowList />}></Route>
            <Route
              path="/ExperienceDetails"
              element={<ExperienceDetails />}
            ></Route>
            <Route
              path="/EmploymentDetailss"
              element={<EmploymentDetails />}
            ></Route>
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
