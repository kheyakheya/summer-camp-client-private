import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import { FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import SectionHeading from "../Compontents/SectionHeading";
import { Helmet } from "react-helmet-async";

const StudentCart = () => {
    const [cart, refetch] = useCart();
    const handleDelete=(lesson)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed){
                fetch(`http://localhost:5000/cart/${lesson._id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })

    }
    return (
        <div className="px-12">
             <Helmet>
                <title>Sporting Star || Student Cart</title>
            </Helmet>
            <div className="mt-2 mb-16">
            <SectionHeading heading={'Selected Classes'}></SectionHeading>

            </div>
            <table className="my-12 table w-full">
                {/* head*/}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Class</th>
                        <th>Instructor</th>
                        <th>Price</th>
                        <th>Delete</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((lesson, index) =>
                        <tr key={lesson._id}>
                            <th>{index + 1}</th>
                            <td><img className="w-20 h-20" src={lesson.image}></img></td>
                            <td>{lesson.name}</td>
                            <td>{lesson.instructor}</td>
                            <td>{lesson.price}</td>
                            <td><button onClick={()=>handleDelete(lesson)}><FaTrash className="text-red-700"></FaTrash></button></td>
                            <td><Link to={`payment/${lesson._id}`} ><button className='btn border-none btn-sm bg-red-700 text-white'>Pay</button></Link></td>
                          </tr>
                    )}

                </tbody>
            </table>

        </div>
    );
};

export default StudentCart;