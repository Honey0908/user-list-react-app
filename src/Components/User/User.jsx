import React, { Fragment, memo } from 'react'
import styles from './User.module.css'
import { Lock, Trash2 } from 'react-feather'
import { useDispatch } from 'react-redux'
import { sethoveredUser } from '../../store/UserSlice'

const User = ({ user }) => {


    const dispatch = useDispatch();

    const handleMouseHover = (user) => {
        dispatch(sethoveredUser(user))
    }
    const handleUserLeave = () => {
        dispatch(sethoveredUser(null))
    };


    /*It will display User information row in table*/
    return (

        <tr key={user.id} >

            {/* If User Hover over name or Image then Hovered Component will be shown */}

            <td onMouseEnter={() => handleMouseHover(user)} onMouseLeave={handleUserLeave} style={{ width: "350px" }}>
                <div className={styles.name_col} >
                    <img src={user.avatar} className={styles.profileImage} alt="" height="45px" width="45px" />
                    <div>
                        <h4>{user.first_name} {user.last_name}</h4>
                        <div>{user.email}</div>
                    </div>
                </div>
            </td>


            { /* if user ID is one then it is owner  */}
            {
                user.id === 1 ?

                    (
                        <Fragment>
                            <td>
                                <h4 style={{ color: 'green' }}>Active</h4>
                            </td>

                            <td>
                                <h4>Owner</h4>
                            </td>

                            <td> <Lock /> </td>

                        </Fragment>
                    )
                    :

                    <Fragment>

                        <td>
                            <select>
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>

                        </td>

                        <td>
                            <select>
                                <option value="manager">Manager</option>
                                <option value="read">Read</option>
                            </select>

                        </td>
                        <td>  <Trash2 /> </td>

                    </Fragment>
            }

        </tr>

    )
}

export default User
