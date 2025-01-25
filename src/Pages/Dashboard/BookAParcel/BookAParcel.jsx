import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';

const BookAParcel = () => {

    const { user, logOut } = useContext(AuthContext);

    const currentDate = new Date().toLocaleDateString();

    const { register } = useForm();


    return (
        <div>
             <div className="text-center">
            <h1 className="text-5xl font-bold">Add Parcel</h1>

        </div>
        <form >
            <div className="form-control w-full my-6">
                <label className="label">
                    <span className="label-text">Recipe Name*</span>
                </label>
                <input
                    type="text"
                    placeholder="Recipe Name"
                    {...register('name', { required: true })}
                    required
                    className="input input-bordered w-full" />
            </div>
            <div className="flex gap-6">
                {/* category */}
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Category*</span>
                    </label>
                    <select defaultValue="default" {...register('category', { required: true })}
                        className="select select-bordered w-full">
                        <option disabled value="default">Select a category</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                    </select>
                </div>

                {/* price */}
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Price*</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Price"
                        {...register('price', { required: true })}
                        className="input input-bordered w-full" />
                </div>

            </div>
            {/* recipe details */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Recipe Details</span>
                </label>
                <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
            </div>

            <div className="form-control w-full my-6">
                <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
            </div>

            <button className="btn">
                Add Item <FaUtensils className="ml-4"></FaUtensils>
            </button>
        </form>
    </div>

    );
};

export default BookAParcel;