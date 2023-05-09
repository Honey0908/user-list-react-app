import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../store/UserSlice';
import styles from './Pagination.module.css'

const Pagination = () => {

    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (page) => {
        setCurrentPage(page);
        dispatch(fetchUsers(page));
    };

    return (

        <div className={styles.container}>

            <span className={` ${currentPage === 1 ? styles.active : styles.inactive}`} onClick={() => handleClick(1)}>1</span>
            <span className={` ${currentPage === 2 ? styles.active : styles.inactive}`} onClick={() => handleClick(2)}>2</span>

        </div>

    )
}

export default Pagination



