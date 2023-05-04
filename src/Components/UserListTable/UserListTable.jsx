import React, { Fragment, useEffect, useState } from 'react'
import User from '../User/User'
import styles from './UserListTable.module.css'
import HoveredUser from '../HoveredUser/HoveredUser'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../store/UserSlice'
import Pagination from '../Pagination.jsx/Pagination'
import { PulseLoader } from 'react-spinners'


const UserListTable = () => {


    // taking all states of redux differently for stoping unneccessary re-renders of this component as other states like hoveredUser is changed then this component is also re-rendered
    const users = useSelector((state) => state.user.users);
    const loading = useSelector((state) => state.user.loading);
    const error = useSelector((state) => state.user.error);


    const dispatch = useDispatch()
    const col_names = ["Name", "Status", "Access", ""];


    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (

        <div className={styles.user_list_container}>
            <table >
                <thead>
                    <tr>

                        {/* column names */}
                        {
                            col_names.map((colName, index) => {
                                return (
                                    <Fragment key={index}>

                                        <th className={styles.table_cols}>{colName}</th>

                                    </Fragment>
                                )
                            })

                        }

                    </tr>
                </thead>

                <tbody>
                    {loading && <tr><td><PulseLoader color='grey' /></td></tr>}
                    {error && <tr><td>Something Wrong !</td></tr>}
                    {users && users.map(user => (
                        <User user={user} key={user.id} />
                    ))}

                </tbody>

            </table>

            <Pagination />

            <HoveredUser />
        </div>
    )
}

export default UserListTable
