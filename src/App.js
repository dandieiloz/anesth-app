import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import BottomNavigator from "./components/BottomNavigator";
import PhoneBook from "./pages/PhoneBook";
import Announcements from "./pages/Announcements";
import Protocols from "./pages/Protocols";
import WorkSchedule from "./pages/WorkSchedule";
import DailySchedule from "./pages/workSchedule/DailySchedule";
import WorkShifts from "./pages/workSchedule/WorkShifts";
import Sessia from "./pages/workSchedule/Sessia";
import OnCall from "./pages/workSchedule/OnCall";
import Tech from "./pages/workSchedule/Tech";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div
          style={{
            paddingTop: "75px",
            paddingBottom: "35px",
          }}
        >
          <Routes>
            <Route path="/phonebook" element={<PhoneBook />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/protocols" element={<Protocols />} />
            <Route path="/work-schedule" element={<WorkSchedule />} />
            <Route path="/work-schedule/daily" element={<DailySchedule />} />
            <Route path="/work-schedule/shifts" element={<WorkShifts />} />
            <Route path="/work-schedule/sessia" element={<Sessia />} />
            <Route path="/work-schedule/oncall" element={<OnCall />} />
            <Route path="/work-schedule/tech" element={<Tech />} />
            <Route path="/" element={<Announcements />} />
          </Routes>
        </div>
        <BottomNavigator />
      </div>
    </Router>
  );
};

export default App;
