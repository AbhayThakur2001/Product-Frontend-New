import axios from 'axios'
import React from 'react'
import {useForm} from "react-hook-form"
import { ToastContainer, toast} from 'react-toastify'
import "../Assets/CSS/toast.css"


export default function CreatePage() {
    const {register, handleSubmit, reset} = useForm()

    const notify = () => toast("Created Succeess");
    const onSubmit = async (data) => {
        try{
            const response = await axios.post('http://localhost:3000/api/products',data)

            alert("Product is cfreated success",response.data)
            reset()
        }
        catch (error) {
            console.log("error is created", error);
        }      
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Product form</h1>
        <label >Enter Product name</label>
        <input {...register("p_name")} />
        <br />
        <label >Enter Product Price</label>
        <input {...register("price")} />
        <br />
        <label >Enter Product Description</label>
        <input {...register("discription")} />
        <br />
        <input type="submit" onClick={notify} />
        <ToastContainer></ToastContainer>
        </form>
    )
}