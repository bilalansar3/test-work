import axios from "axios";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage=()=>{
const [data,setData]=useState([]);
const [error,setError]=useState(false);
const [loading,setLoading]=useState(true);

    // navbar navigation 
     const history=useNavigate();
     const navi=()=>{
        return(
            history("/adduser")
        )
     }
    //  use effect 
    useEffect(() => {
        getdata()
        }, [data]) 


    //  api  section

    function getdata(){
        axios.get('https://67c52880c4649b9551b569ae.mockapi.io/Crudapp').then((responce)=>{
setData(responce)
        }).catch((error)=>{
setError(true)
        }).finally((loading)=>{
setLoading(false)
        })
    }

 
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div>
    <a className="navbar-brand" href="#">Crud App</a>
    </div>
    
<div>
    <button onClick={navi} type="button" className="btn btn-primary">Create User Data</button>
</div>

    
  </div>
</nav>
<table class="table">
  <thead>
    {
        data.map((items,index)=>{
            return(
                <>
    <tr>
      <th scope="col">{items.id}</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Address</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email address</th>
      <th scope="col">Password</th>
    </tr>
                </>
            )
        })
    }
    
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>

  </tbody>
</table>
        </>
    )
}


export default HomePage;