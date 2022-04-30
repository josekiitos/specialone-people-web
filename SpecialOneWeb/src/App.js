import React, { useState } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "../src/components/views/header/Header.js";
import { Main, DrawerHeader } from "./globalCustomComponents.js";
import PersonalInformation from "../src/components/views/personal-info-form/PersonalInformationForm.js";

function App() {
    const [open, setOpen] = useState(false);
    return (
        <div className="App">
            <Header open={open} setOpen={setOpen} />
            <Main open={open}>
                <DrawerHeader />
                <Routes>
                    <Route path="/" element={<div>Hello World</div>} />
                    <Route path="/edit-personal-info/" element={<PersonalInformation />} >
                        <Route path=":personalInfoId" element={<PersonalInformation />} />
                    </Route>
                    <Route path="/edit-contact-info" element={<div>Contact Info</div>} />
                </Routes>
            </Main>
        </div>
  );
}

export default App;
