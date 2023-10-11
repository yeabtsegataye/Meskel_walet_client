import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UseAuthContext } from "../Hooks/useAuthContext";
import { useToast } from '@chakra-ui/react';

const Home = () => {
  const [people, setPeople] = useState([]);
  const { user } = UseAuthContext();
  const api = import.meta.env.VITE_API;
  const api2 = import.meta.env.VITE_API_DELETE;
  const Toast = useToast();

  useEffect(() => {
    axios
      .get(api)
      .then((result) => setPeople(result.data))
      .then(()=>{
        Toast({
          title: " data fatched",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      })
      .catch((err) =>  Toast({
        title: err.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      }))
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Do you want to delete?');
    if (confirmDelete) {
      if (user) { // Check if user exists before accessing its properties
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
       const result = axios
          .delete(api2 + id, config)
          .then((result) => {
            alert('Record deleted');
            window.location.reload(); // Reload the page after delete
          })
          .catch((err) => console.log(err));
          if(result){
            Toast({
              title: " successfully Deleted",
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
          }
          if(!result){
            Toast({
              title: "DEleting failed",
              status: "error",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            })
          }
      } else {
        Toast({
          title: "unexpected error",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        }); 
        console.log('No user found');
      }
    }if(!confirmDelete){
      Toast({
        title: "NO data deleted",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      }); 
    }
  };

  const totalCash = people.reduce((total, person) => {
    const personalTotal =
      (person.Tikmt ? parseFloat(person.Tikmt) : 0) +
      (person.Hidar ? parseFloat(person.Hidar) : 0) +
      (person.Tahisas ? parseFloat(person.Tahisas) : 0) +
      (person.Tir ? parseFloat(person.Tir) : 0) +
      (person.Yekatit ? parseFloat(person.Yekatit) : 0) +
      (person.Megabit ? parseFloat(person.Megabit) : 0) +
      (person.Miyaziya ? parseFloat(person.Miyaziya) : 0) +
      (person.Ginbot ? parseFloat(person.Ginbot) : 0) +
      (person.Sene ? parseFloat(person.Sene) : 0) +
      (person.Hamle ? parseFloat(person.Hamle) : 0) +
      (person.Nehase ? parseFloat(person.Nehase) : 0) +
      (person.Meskerm ? parseFloat(person.Meskerm) : 0);
    return total + personalTotal;
  }, 0);
  const formattedTotalCash = totalCash.toLocaleString();

  return (
    <div style={{ height: '100vh',backgroundColor:"lightgray" }}>
      
      <div className="pt-3">
        <div className="w-100">
          <h2 className="text-center font-weight-bold">
            Total Current Cash = {formattedTotalCash}
          </h2>
          <div className="table-responsive">
            <table className="table text-center mt-3 bg-secondary" >
              <thead className="table-dark sticky-header">
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Mobile</th>
                  <th>Tikmt</th>
                  <th>Hidar</th>
                  <th>Tahisas</th>
                  <th>Tir</th>
                  <th>Yekatit</th>
                  <th>Megabit</th>
                  <th>Miyaziya</th>
                  <th>Ginbot</th>
                  <th>Sene</th>
                  <th>Hamle</th>
                  <th>Nehase</th>
                  <th>Meskerm</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {people.map((person) => {
                  const personalTotal =
                    (person.Tikmt ? parseFloat(person.Tikmt) : 0) +
                    (person.Hidar ? parseFloat(person.Hidar) : 0) +
                    (person.Tahisas ? parseFloat(person.Tahisas) : 0) +
                    (person.Tir ? parseFloat(person.Tir) : 0) +
                    (person.Yekatit ? parseFloat(person.Yekatit) : 0) +
                    (person.Megabit ? parseFloat(person.Megabit) : 0) +
                    (person.Miyaziya ? parseFloat(person.Miyaziya) : 0) +
                    (person.Ginbot ? parseFloat(person.Ginbot) : 0) +
                    (person.Sene ? parseFloat(person.Sene) : 0) +
                    (person.Hamle ? parseFloat(person.Hamle) : 0) +
                    (person.Nehase ? parseFloat(person.Nehase) : 0) +
                    (person.Meskerm ? parseFloat(person.Meskerm) : 0);

                  return (
                    <tr key={person._id}>
                      <td><strong>{person.name ? person.name : '--'}</strong></td>
                      <td><strong>{person.gender ? person.gender : '--'}</strong></td>
                      <td><strong>{user && person.mobile ? person.mobile : '--'}</strong></td>
                      <td>{person.Tikmt ? person.Tikmt : '--'}</td>
                      <td>{person.Hidar ? person.Hidar : '--'}</td>
                      <td>{person.Tahisas ? person.Tahisas : '--'}</td>
                      <td>{person.Tir ? person.Tir : '--'}</td>
                      <td>{person.Yekatit ? person.Yekatit : '--'}</td>
                      <td>{person.Megabit ? person.Megabit : '--'}</td>
                      <td>{person.Miyaziya ? person.Miyaziya : '--'}</td>
                      <td>{person.Ginbot ? person.Ginbot : '--'}</td>
                      <td>{person.Sene ? person.Sene : '--'}</td>
                      <td>{person.Hamle ? person.Hamle : '--'}</td>
                      <td>{person.Nehase ? person.Nehase : '--'}</td>
                      <td>{person.Meskerm ? person.Meskerm : '--'}</td>
                      <td><strong>{personalTotal}</strong></td>
                      <td>
                        {user && (
                          <div className="d-flex justify-content-between align-items-center">
                            <Link
                              to={`/edit/${person._id}`}
                              className="btn btn-success btn-sm"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(person._id)}
                              className="btn btn-danger btn-sm ms-2"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
