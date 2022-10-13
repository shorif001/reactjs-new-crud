import React, { useEffect, useState, } from 'react';
import { axios } from "../Axios";
import { useHistory } from "react-router-dom";
import Update from './Update';


const Home = () => {

  // https://www.youtube.com/watch?v=AirWT_XpEpM

  const [users, setUsers] = useState([]);

  //// stap 1
  // const getUsers = async () => {
  //   const response = await axios.get(`/users`).catch((err) => console.log("Error:", err));
  //   if (response && response.data)
  //     setUsers(response.data);
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  //// stap 2
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(`/users`)
        .catch((error) => {
          console.log("Error:", error);
        })
      // .catch((err) => console.log("Error:", err));
      // console.log(response.data);
      setUsers(response.data)
    };
    getUsers();

  }, []);

  // create part

  const [formData, setFormData] = useState({});

  const addUser = async () => {
    const res = await axios.post(`/users`, formData)
      .catch((error) => {
        console.log("Error:", error);
      })
    console.log(res);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  // delete section

  const deleteUser = (id, e) => {
    e.preventDefault();
    axios.delete(`/users/${id}`)
      .then(res => {
        console.log(res);
      }).catch((err) => {
        console.log(err)
      })

  }


  //update section
  const history = useHistory();
  const updateUser = (id) => {
    console.log(id)
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


      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>

                {users.map((user, idx) => (
                  <tr key={idx}>
                    <th>{user.id}</th>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>
                      <button onClick={() => updateUser(user.id, history.push("/update"))}>Edit</button>
                      <button onClick={(e) => deleteUser(user.id, e)}>Delete</button>
                    </td>
                  </tr>
                ))
                }



              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home