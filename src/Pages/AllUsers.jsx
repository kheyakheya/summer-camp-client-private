import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useState } from "react";
import Swal from 'sweetalert2';
import SectionHeading from '../Compontents/SectionHeading';

const AllUsers = () => {
    const [axiosSecure]=useAxiosSecure();

    const {data:users=[],refetch }=useQuery(["users"], async ()=>{
        const res= await axiosSecure.get('/users');
        return res.data;
    } 
        
    )
    // user update delete functions
    const handleMakeAdmin=(user)=>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH',
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch();
                Swal.fire(
                    `${user.name} is Admin Now!`,
                    'success'
    
                );                
            }
        })
    }
    const handleMakeInstructor=(user)=>{
      fetch(`http://localhost:5000/users/instructor/${user._id}`,{
        method: 'PATCH',
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
            refetch();
            Swal.fire(
                `${user.name} is instructor!`,
                'success'

            );
            
            
        }
    })
    }
    return (
        <div className=" w-full px-16">
            <SectionHeading heading={'Manage Classes'}></SectionHeading>
            <table className="mt-12 table w-full">
    {/* head*/}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Instructor</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user,index)=>
      <tr key={user._id}>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        
        <td>
            {user.role === 'admin' ?
            <button disabled className="btn bg-red-700 border-none  text-white">Admin</button>
                          :
             <button onClick={() => handleMakeAdmin(user)} className="btn bg-red-700 border-none  text-white">Admin</button>
            }
        </td>
        <td>
            {user.role === 'instructor' ?
            <button disabled  className="btn  bg-red-700 border-none  text-white">Instructor</button>
            :
            <button  onClick={() => handleMakeInstructor(user)} className="btn bg-red-700 border-none  text-white">Instructor</button>
             }
            
        </td>

        
      </tr>)}
      
      
    </tbody>
  </table>
        </div>
    );
};

export default AllUsers;