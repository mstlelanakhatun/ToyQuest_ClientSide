import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthenticationPart/AuthProvider';
import MyDataRow from './MyDataRow';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from '../../../../Hooks/useTitle';

const MyToys = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    useTitle('My Toys')

    const { user } = useContext(AuthContext);


    const [myToys, setMyToys] = useState([])
    const [asc, setAsc] = useState(true)
    // console.log(myToys)

    useEffect(() => {
        fetch(`https://toys-server-ten.vercel.app/myToys/${user?.email}?sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [asc])

    return (
        <div>
            <h1 className="text-center mb-8 text-4xl">My Toys</h1>
            <button onClick={() => setAsc(!asc)}
                className='btn btn-primary'>{asc ? 'Price: High to low' : 'Price: Low to high'}</button>
            <div className={`overflow-x-auto ${myToys?.length < 6 ? 'h-screen' : ''}`}>
                <table className="table w-full">
                    {/* head */}
                    <thead data-aos="fade-left">
                        <tr >
                            <th></th>
                            <th>Image</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Rating</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys?.slice(0, 20).map(RowData => <MyDataRow
                                key={RowData._id}
                                RowData={RowData}
                                setMyToys={setMyToys}
                                myToys={myToys}
                            ></MyDataRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;