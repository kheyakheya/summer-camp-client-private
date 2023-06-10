import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import SectionHeading from "../Compontents/SectionHeading";

const PaymentHistory = () => {
    const {user}= useContext(AuthContext);
    const [billings, setBillings]= useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/payments/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setBillings(data)
        })
    },[user])
    return (
      <div className="px-12">
      <div className="mt-2 mb-16">
      <SectionHeading heading={'Payment History'}></SectionHeading>

      </div>
            <table className="table w-full">
    {/* head*/}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Transaction ID</th>
        <th>Price</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {billings.map((billing,index)=>
      <tr key={billing._id}>
        <th>{index+1}</th>
        <td>{billing.className}</td>
        <td>{billing.transactionId}</td>
        <td>{billing?.price}</td>
        <td>{billing.date}</td>
        

        
      </tr>)}
      
      
    </tbody>
  </table>

        </div>
    );
};

export default PaymentHistory;