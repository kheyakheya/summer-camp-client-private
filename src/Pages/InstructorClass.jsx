import { useContext } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";
import { GrUpdate } from "react-icons/gr";
import UpdateModal from "../Compontents/UpdateModal";
import Swal from "sweetalert2";
import SectionHeading from "../Compontents/SectionHeading";

const InstructorClass = () => {
    const {user, loading}= useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    const {data:lessons=[], refetch}=useQuery({
        queryKey:['classes', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res= await axiosSecure.get(`/classes/${user?.email}`);
            console.log("myClass",res.data)
            return res.data;

        }

       
    })
    // update modal
    const modalHandler = (info) => {
        const newClass = {...info, price: parseFloat(info.price)}
        console.log("item info", newClass);
        axiosSecure.put(`/classes/${info._id}`, newClass)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount>0){
                refetch();
                Swal.fire(
                    'Good job!',
                    'Info Updated!',
                    'success'
                  )
            }
        })


  
  
  
      }
   
    return (
        <div className="px-12">
      <div className="mt-2 mb-16 ">
      <SectionHeading heading={'My Added Classes'}></SectionHeading>

      </div>            <table className="table w-full">
                {/* head*/}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Class</th>
                        <th>Instructor</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Feedback</th>
                        <th>Seats</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {lessons.map((lesson, index) =>
                        <tr key={lesson._id}>
                            <th>{index + 1}</th>
                            <td><img src={lesson.image}></img></td>
                            <td>{lesson.name}</td>
                            <td>{lesson.instructor}</td>
                            <td>{lesson.status}</td>
                            <td>
                               

                                <label className="bg-red-700" htmlFor={`my-modal-${index}`}><GrUpdate ></GrUpdate></label>
                                <UpdateModal index={index} lesson={lesson} modalHandler={modalHandler} ></UpdateModal>

                            </td>
                            <td>{lesson.status == 'denied' ? `${lesson.feedback}`: 'no feedback'}</td>

                            
                            <td>{lesson.seats}</td>
                            <td>
                                {lesson.price}
                            </td>


                        </tr>)}


                </tbody>
            </table>
        </div>
    );
};

export default InstructorClass;