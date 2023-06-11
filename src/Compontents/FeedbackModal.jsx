import { useForm } from "react-hook-form";
const FeedbackModal = ({index,lesson,modalHandler}) => {
    const { register, handleSubmit } = useForm();

    return (
        <div >
        <input type="checkbox" id={`my-modal-${index}`} className="modal-toggle" />
        <div className="modal ml-auto w-2/3">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold  text-center text-red-600 text-2xl">Feedback for {lesson.name}</h3>
                <div className="mt-2">
                <form onSubmit={handleSubmit(modalHandler)}>
                <div>
            <div className="form-control w-full mb-4 hidden">
                    <label className="label ">
                        <span className="label-text ont-semibold">id</span>
                    </label>
                    <input type="text" defaultValue={lesson._id} placeholder="id" {...register("_id", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                </div>
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Feedback</span>
                    </label>
                    <textarea {...register("feedback", { required: true })} className="textarea textarea-bordered h-24" placeholder="feedback"></textarea>
                </div>
        </div>
                
               
                
               
                <input  className="btn btn-sm bg-red-700 border-none my-4" type="submit" value="Send Feedback" />

            </form>

                </div>
                <div className="modal-action -mt-24">
                    <label htmlFor={`my-modal-${index}`} className="btn bg-red-700 border-none">done!</label>
                </div>
            </div>
        </div>
    </div>
       
    );
};

export default FeedbackModal;