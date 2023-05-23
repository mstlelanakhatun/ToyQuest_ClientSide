import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';
import { FaSistrix } from "react-icons/fa";
import useTitle from '../../../../Hooks/useTitle';

const AllToys = () => {

    const [toyData, setToyData] = useState();
    const [toyLoadedData, setToyLoadedData] = useState();
    const [searchText, setSearchText] = useState("");
    useTitle('All Toys')

    const handleSearch = () => {
        fetch(`https://toys-server-ten.vercel.app/toySearch/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setToyData(data);
            });
    };

    useEffect(() => {
        fetch('https://toys-server-ten.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToyData(data))
    }, [])

    // console.log(toyLoadedData)

    useEffect(() => {
        setToyLoadedData(toyData)
    }, [toyData])

    return (
        <>

            <div className="w-3/4 md:max-w-2xl mx-auto mb-10">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <FaSistrix className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </div>
                    <input onChange={(e) => setSearchText(e.target.value)}
                        type="text" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Toy Name" required />
                    <button onClick={handleSearch} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </div>

            <div className={`h-screen ${toyData ? 'hidden' : ''}`}></div>
            <div className={`overflow-x-auto ${toyData?.length < 6 ? 'h-screen' : '' && toyLoadedData === undefined ? 'h-screen' : ''}`}>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toyData?.slice(0, 20).map(RowData => <AllToysRow
                                key={RowData._id}
                                RowData={RowData}
                            ></AllToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllToys;