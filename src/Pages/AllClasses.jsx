import { FcApprove, FcDisapprove, FcFeedback } from "react-icons/fc";
import useClasses from "../hooks/useClasses";

import Swal from "sweetalert2";
import FeedbackModal from "../Compontents/FeedbackModal";

const AllClasses = () => {
    const [classes, refetch] = useClasses();

    const handleApprove = (lesson) => {
        fetch(`http://localhost:5000/users/approved/${lesson._id}`, {
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
        fetch(`http://localhost:5000/users/denied/${lesson._id}`, {
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
        fetch(`http://localhost:5000/users/feedback/${info._id}`, {
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
        <div>
            <h2>{classes.length}</h2>
            <table className="table w-full">
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
                                    <button disabled className="btn btn-ghost bg-orange-600  text-white"><FcApprove></FcApprove></button>
                                    :
                                    <button onClick={() => handleApprove(lesson)} className="btn btn-ghost bg-orange-600  text-white"><FcApprove></FcApprove></button>
                                }
                            </td>
                            <td>
                                {/* <button  onClick={() => handleDeny(lesson)} className="btn text-3xl"><FcDisapprove></FcDisapprove></button> */}

                                {lesson.status === 'approved' || lesson.status === 'denied' ?
                                    <button disabled className="btn btn-ghost bg-orange-600  text-white"><FcDisapprove></FcDisapprove></button>
                                    :
                                    <button onClick={() => handleDeny(lesson)} className="btn btn-ghost bg-orange-600  text-white"><FcDisapprove></FcDisapprove></button>
                                }

                            </td>
                            <td>

                                <label htmlFor={`my-modal-${index}`} className="btn border-none bg-[#f36ea5]"><FcFeedback></FcFeedback></label>
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