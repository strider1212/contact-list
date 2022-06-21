import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddContacts from "./AddContacts";
import Contacts from "./Contacts";

function App() {

  const [formData, setFormData] = useState([]);

  const submitHandler = (name, email, phone, img) => {
    setFormData([
      ...formData,
      {
      name: name,
      email: email, 
      phone: phone,
      img: img
    }])
  }

  const deleteHandler = (i) => {
    setFormData([
      ...formData.slice(0, i),
      ...formData.slice(i + 1, formData.length)
    ])
  }

  submitHandler.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.number,
    img: PropTypes.string
  }

  return (
    <div>
      <div>
        <h1>React Contact List</h1>
      </div>
      <Routes>
        <Route path='/contacts/new' element={<AddContacts submitHandler={submitHandler}/>} />
        <Route path='/contacts' element={<Contacts formData={formData} deleteHandler={deleteHandler}/>} />
      </Routes>
    </div>
  );
}


export default App;
