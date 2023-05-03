import React, { Fragment } from 'react'
import styles from './HoveredUser.module.css'
import ProgressBar from '../ProgessBar/ProgressBar'
import { useSelector } from 'react-redux'


const HoveredUser = () => {

    const user = useSelector(state => state.user.hoveredUser)

    return (

        <Fragment>

            {
                user ? (

                    <div className={styles.main_container} >

                        <div className={styles.userInfoDiv}>

                            <img src={user.avatar} className={styles.profileImage} alt="" />
                            <div style={{ position: 'relative' }}>

                                <h3>{user.first_name} {user.last_name}</h3>
                                <div style={{ height: "12px", width: "12px", backgroundColor: "green", borderRadius: "100%", position: "absolute", right: "-12%", top: "-10%" }}></div>
                            </div>
                            <p>{user.email}</p>
                            <h3>Your plan: Standard</h3>
                            <button className={styles.activeUserbtn}>Active User</button>

                        </div>

                        {/* Progress bar component */}
                        <ProgressBar value={32} max={100} label="Plan Users" />


                        <div className={styles.reviewDiv}>
                            <div><h2>2,400</h2>
                                <p>Clicks reviewed</p>
                            </div>
                            <div><h2>2,400</h2>
                                <p>Monthly Clicks</p>
                            </div>

                        </div>

                    </div >

                ) : <></>
            }

        </Fragment>
    )

}
export default HoveredUser
