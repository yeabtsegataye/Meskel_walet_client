import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file
import { UseAuthContext } from '../Hooks/useAuthContext';
import { useToast } from '@chakra-ui/react';

const Dashboard = () => {
  const { user } = UseAuthContext();
  const Toast = useToast();
  const [loading , setLoading]= useState(false)
  const [people, setPeople] = useState({
    name: '',
    gender: '',
    mobile: '',
    Tikmt: '',
    Hidar: '',
    Tahisas: '',
    Tir: '',
    Yekatit: '',
    Megabit: '',
    Miyaziya: '',
    Ginbot: '',
    Sene: '',
    Hamle: '',
    Nehase: '',
    Meskerm: ''
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    setPeople({ ...people, [e.target.name]: e.target.value });
  };
  //when press submit button to post the data to the form
  const api3 = import.meta.env.VITE_API_ADD
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
   const result = axios
      .post(api3, people ,config)
      .then(() => {
        navigate('/');
      })
      .then(()=>setLoading(false))
      .catch((err) => console.log(err));
      if(result){
        Toast({
          title: " successfully ADDED",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
      if(!result){
        Toast({
          title: "Adding failed",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        })
      }
  };
  return (
    <div className="d-flex w-100 justify-content-center align-items-center">
    <div className="dashboard-container border mt-5 rounded bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className="form-control"
              required
              placeholder="Enter Name"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender: </label>
            <input
              type="text"
              name="gender"
              className="form-control"
              required
              placeholder="Enter Gender"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile: </label>
            <input
              type="number"
              name="mobile"
              className="form-control"
              placeholder="Enter Mobile Number"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Tikmt">Money in Tikmt: </label>
            <input
              type="number"
              name="Tikmt"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Hidar">Money in Hidar: </label>
            <input
              type="number"
              name="Hidar"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Tahisas">Money in Tahisas: </label>
            <input
              type="number"
              name="Tahisas"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Tir">Money in Tir: </label>
            <input
              type="number"
              name="Tir"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Yekatit">Money in Yekatit: </label>
            <input
              type="number"
              name="Yekatit"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Megabit">Money in Megabit: </label>
            <input
              type="number"
              name="Megabit"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Miyaziya">Money in Miyaziya: </label>
            <input
              type="number"
              name="Miyaziya"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Ginbot">Money in Ginbot: </label>
            <input
              type="number"
              name="Ginbot"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Sene">Money in Sene: </label>
            <input
              type="number"
              name="Sene"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Hamle">Money in Hamle:: </label>
            <input
              type="number"
              name="Hamle"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Nehase">Money in Nehase: </label>
            <input
              type="number"
              name="Nehase"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Meskerm">Money in Meskerm: </label>
            <input
              type="number"
              name="Meskerm"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
      {!loading && <button className="btn btn-info mt-1">Submit</button>}
      {loading && <button className="btn btn-info mt-1" disabled style={{cursor: "not-allowed"}}>loading ...</button>}
         
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
