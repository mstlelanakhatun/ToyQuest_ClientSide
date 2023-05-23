import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllToysRow = ({ RowData }) => {

    useEffect(() => {
        AOS.init();
    }, [])
    // console.log(RowData)
    const { SellerName, ToyName, Price, quantity, subCategory, _id } = RowData;

    // console.log(subCategory)

    return (
        <tr className="hover" data-aos="fade-left">
            <th></th>
            <td>{SellerName}</td>
            <td>{ToyName}</td>
            <td>{subCategory[0].value}</td>
            <td>{Price}</td>
            <td>{quantity}</td>
            <td><Link to={`/toy/${_id}`} className="btn button-primary btn-xs bg-indigo-500">View Details button</Link></td>
        </tr>
    );
};

export default AllToysRow;