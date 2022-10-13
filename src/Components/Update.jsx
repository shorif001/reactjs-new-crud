import React, { useEffect, useState } from 'react';
import { axios } from "../Axios";

const Update = (props) => {

  const [formData, setFormData] = useState({});

  const addUser = async () => {
    const id = props.match.params.id
    const res = await axios.put(`/users/${id}`, formData)
      .then(res => {
        console.log(res.data);
      }).catch((error) => {
        console.log("Error:", error);
      })
    console.log(res);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <form onSubmit={addUser}>
              <div className="mb-3">
                <label className="form-label">first name</label>
                <input type="text" name='fname' onChange={handleChange} className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">last Name</label>
                <input type="text" name='lname' onChange={handleChange} className="form-control" />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Update