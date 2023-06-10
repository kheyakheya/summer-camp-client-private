
import Swal from "sweetalert2";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import SectionHeading from "../Compontents/SectionHeading";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddClass = () => {
    const {user}=useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const onSubmit = data => {
        console.log("data", data);
        const formData = new FormData();
        formData.append("image", data.image[0]);

        // hhhfff
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                const imageURL = imgRes.data.display_url;
                const { name, instructor, email, seats, price } = data;
                const classInfo = { name, instructor, email, seats: parseInt(seats), price: parseFloat(price), image: imageURL, status: 'pending', enrolled: 0}
                
                axiosSecure.post('/classes', classInfo)
                    .then(data => {
                        if (data.data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Class Added by Instructor ',
                                showConfirmButton: false,
                                timer: 1500
                            })

                        }
                    })
                
            })
    };
    return (
        <div className="pt-20 w-full px-16">
            <SectionHeading heading={'Add A Class'}></SectionHeading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label ">
                        <span className="label-text ont-semibold">Class Name</span>
                    </label>
                    <input type="text" placeholder="Class Name" {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input {...register("image", { required: true })} type="file" className="my-4 file-input file-input-bordered w-full " />

                </div>
                <div className="form-control w-full mb-4">
                    <label className="label ">
                        <span className="label-text ont-semibold">Instructor Name</span>
                    </label>
                    <input type="text" readOnly defaultValue={user?.displayName} placeholder="Instructor Name" {...register("instructor", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label ">
                        <span className="label-text ont-semibold">Instructor Email</span>
                    </label>
                    <input readOnly type="text" defaultValue={user?.email} placeholder="Instructor email" {...register("email", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text ont-semibold">Available Seats</span>
                    </label>
                    <input {...register("seats", { required: true })} type="number" placeholder="Available Seats" className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text ont-semibold">Price</span>
                    </label>
                    <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full " />
                </div>



                <div className="text-center">
                    <input className="btn btn-primary my-4" type="submit" value="Add an item" />

                </div>
            </form>
        </div>
    );
};

export default AddClass;
