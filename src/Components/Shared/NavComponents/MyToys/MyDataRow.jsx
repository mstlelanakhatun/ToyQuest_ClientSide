import React, { useEffect } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyDataRow = ({ RowData, setMyToys, myToys }) => {

    useEffect(() => {
        AOS.init();
    }, [])

    const { ToyPicture, ToyName, Price, quantity, subCategory, _id, rating } = RowData;

    const handleDelete = id => {
        // console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toys-server-ten.vercel.app/toy/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id !== _id)
                            setMyToys(remaining)
                        }
                    })
                // console.log(result)
            }

        })
    }



    return (
        <tr className="hover" data-aos="fade-left">
            <th></th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={ToyPicture} alt="" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{ToyName}</td>
            <td>{subCategory[0].value}</td>
            <td>{rating}</td>
            <td>${Price}</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/toy/${_id}`} className="btn button-primary btn-xs bg-indigo-500">View Details button</Link>
            </td>
            <td>
                <Link to={`/updateToy/${_id}`}><button className="btn  btn-outline btn-primary"><FaEdit /></button></Link>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-primary"><FaTrashAlt /></button>
            </td>
        </tr>
    );
};

export default MyDataRow;