import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const MyEnroll = () => {
    const {user}= useContext(AuthContext);
    const [enrolled, setEnrolled]= useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/enrolled/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setEnrolled(data)
        })
    },[user])
    return (
        <div>
            <h2>my enrolled classes {enrolled.length}</h2>
            <table className="table w-full">
    {/* head*/}
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Instructor</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {enrolled.map((paid,index)=>
      <tr key={paid._id}>
        <th>{index+1}</th>
        <th>{paid.image}</th>
        <td>{paid.name}</td>
        <td>{paid.email}</td>
        <td>{paid.instructor}</td>
        <td>{paid.price}</td>
        

        
      </tr>)}
      
      
    </tbody>
  </table>


        </div>
    );
};

export default MyEnroll;