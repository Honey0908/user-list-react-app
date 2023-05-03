import React from 'react'
import UserListTable from '../../Components/UserListTable/UserListTable'
import styles from './UserListContainer.module.css'


const UserListContainer = () => {
    return (
        <div className={styles.main_container}>
            <UserListTable />
        </div>
    )
}

export default UserListContainer
