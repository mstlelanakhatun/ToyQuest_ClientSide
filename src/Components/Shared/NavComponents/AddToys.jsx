import React, { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import { AuthContext } from '../../AuthenticationPart/AuthProvider';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from '../../../Hooks/useTitle';


const AddToys = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    useTitle('Add Toys')

    const { user } = useContext(AuthContext)
    // console.log(user)
    const [selectedOption, setSelectedOption] = useState(null);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const ToyName = form.name.value;
        const quantity = form.quantity.value;
        const SellerName = form.SellerName.value;
        const SellerEmail = form.SellerEmail.value;
        const details = form.details.value;
        const Price = parseFloat(form.Price.value);
        const rating = form.rating.value;
        const ToyPicture = form.photo.value;
        const AddToy = { ToyName, quantity, ToyPicture, Price, SellerName, SellerEmail, details, rating }

        AddToy.subCategory = selectedOption;
        console.log(AddToy)
        fetch(`https://toys-server-ten.vercel.app/allToys`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(AddToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }

    const options = [
        { value: "SportsCar", label: "SportsCar" },
        { value: "Truck", label: "Truck" },
        { value: "RegularCar", label: "RegularCar" },
        { value: "Bike", label: "Bike" },
    ];

    // console.log(selectedOption)

    return (
        <div className="p-6 md:p-8 bg-[#F4F3F0]">
            <h1 data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500" className="text-4xl text-center font-semibold mb-8">Add Your Toys </h1>
            <form onSubmit={handleAddToy}>
                <div className="md:flex justify-center items-center md:gap-10 mb-8">
                    <div className="form-control md:w-1/2" data-aos="fade-right">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Toy Name" name="name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2" data-aos="fade-left">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="number" placeholder="Available Quantity" name="quantity" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <div className="hidden justify-center items-center md:gap-10 mb-8">
                    <div className="form-control md:w-1/2" data-aos="fade-right">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder={user?.displayName} defaultValue={user?.displayName} name="SellerName" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2" data-aos="fade-left">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" placeholder={user?.email} defaultValue={user?.email} name="SellerEmail" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <div className="md:flex justify-center items-center md:gap-10 mb-8">
                    <div className="form-control md:w-1/2" data-aos="fade-right">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <label className="input-group">
                            <input type="number" placeholder="Out of 5" name="rating" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2" data-aos="fade-left">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" placeholder="Toy Price" name="Price" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <div className="md:flex justify-center items-center md:gap-10 mb-8">
                    <div className="form-control md:w-1/2" data-aos="fade-right">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="https://i.ibb.co/PGqMPr9/11.png" name="photo" className="input input-bordered w-full " required />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2" data-aos="fade-left">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Toy Details Write Here" name="details" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <div className="md:flex justify-center items-center md:gap-10 mb-8">
                    <div className="form-control w-full md:w-2/3 " data-aos="fade-right">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <Select
                            className=""
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                        />
                    </div>
                </div>
                <button type="submit" className="button button-primary btn-block">Add Toy</button>

            </form>
        </div>
    );
};

export default AddToys;