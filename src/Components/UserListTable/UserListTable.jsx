import React, { Fragment, useState } from 'react'
import User from '../User/User'
import styles from './UserListTable.module.css'
import HoveredUser from '../HoveredUser/HoveredUser'
import { useSelector } from 'react-redux'

const UserListTable = () => {

    const users = useSelector((state) => state.user.users);
    const col_names = ["Name", "Status", "Access", ""];

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

                    {users.map(user => (
                        <User user={user} key={user.id} />
                    ))}

                </tbody>

            </table>

            <HoveredUser />
        </div>
    )
}

export default UserListTable
