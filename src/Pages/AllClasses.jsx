import { FcApproval, FcFeedback } from "react-icons/fc";
import { MdDangerous } from "react-icons/md";

import useClasses from "../hooks/useClasses";

import Swal from "sweetalert2";
import FeedbackModal from "../Compontents/FeedbackModal";
import SectionHeading from "../Compontents/SectionHeading";
import { Helmet } from "react-helmet-async";

const AllClasses = () => {
    const [classes, refetch] = useClasses();

    const handleApprove = (lesson) => {
        fetch(`http://localhost:5000/classes/approved/${lesson._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire(
                        `Admin approved ${lesson.name}!`,
                        'success'

                    );

                }
            })


    }
    const handleDeny = (lesson) => {
        fetch(`http://localhost:5000/classes/denied/${lesson._id}`, {
            method: 'PATCH',

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${lesson.name} is denied`,

                    })


                }
            })

    }
    // feedback
    const modalHandler = (info) => {
        const feedback = info.feedback;
        console.log("feedback",feedback)
        fetch(`http://localhost:5000/classes/feedback/${info._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ feedback }),

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire(
                        `Feedback given!`,
                        'success'

                    );


                }
            })

  
  
  
      }
    return (
        <div className=" w-full px-16">
             <Helmet>
                <title>Sporting Star || Manage Classes </title>
            </Helmet>
            <SectionHeading heading={'Manage Classes'}></SectionHeading>
            <table className="mt-12 table w-full">
                {/* head*/}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Class</th>
                        <th>Instructor</th>
                        <th>Approve</th>
                        <th>Deny</th>
                        <th>Feedback</th>
                        <th>Email</th>
                        <th>Seats</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((lesson, index) =>
                        <tr key={lesson._id}>
                            <th>{index + 1}</th>
                            <td><img src={lesson.image}></img></td>
                            <td>{lesson.name}</td>
                            <td>{lesson.instructor}</td>
                            <td>
                                {/* <button onClick={() => handleApprove(lesson)} className="btn text-3xl"><FcApprove></FcApprove></button> */}

                                {lesson.status === 'approved' || lesson.status === 'denied' ?
                                    <button disabled className="btn btn-sm btn-outline border-green-600"><FcApproval></FcApproval></button>
                                    :
                                    <button onClick={() => handleApprove(lesson)} className="btn btn-sm btn-outline border-green-600" ><FcApproval></FcApproval></button>
                                }
                            </td>
                            <td>
                                {/* <button  onClick={() => handleDeny(lesson)} className="btn text-3xl"><FcDisapprove></FcDisapprove></button> */}

                                {lesson.status === 'approved' || lesson.status === 'denied' ?
                                    <button disabled className="btn btn-sm btn-outline border-red-600 text-red-700"><MdDangerous></MdDangerous></button>
                                    :
                                    <button onClick={() => handleDeny(lesson)} className="btn btn-sm btn-outline border-red-600 text-red-700"><MdDangerous></MdDangerous></button>
                                }

                            </td>
                            <td>

                                <label htmlFor={`my-modal-${index}`} className="btn btn-outline btn-sm border-blue-600"><FcFeedback></FcFeedback></label>
                                <FeedbackModal index={index} lesson={lesson} modalHandler={modalHandler} ></FeedbackModal>

                            </td>
                            
                            <td>
                                {lesson.email}
                            </td>
                            <td>
                                {lesson.seats}
                            </td>
                            <td>
                                {lesson.price}
                            </td>


                        </tr>)}


                </tbody>
            </table>

        </div>
    );
};

export default AllClasses;