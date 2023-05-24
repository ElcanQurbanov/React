import React from 'react'
import logo from '../../assets/img/logo.svg'
import Icon from '@mdi/react';
import { mdiAccount, mdiAlbum } from '@mdi/js';




function Header() {
    return (
        <>

            <div className='sale-header'>

                <p>İndi al, 3 ay sonra ödə! Yalnız onlayn!</p>

            </div>

            <div className='header'>


                <div className='col-3 '>
                    <img src={logo} alt="" />
                </div>

                <div className='col-5 '>

                    <div className='d-flex'>
                        <input type="text" placeholder='Axtaris' />

                        <div>

                            <div className="icons">

                                <ul className='d-flex'>
                                    <li ><a className='text-danger' href="">Kampaniyalar</a></li>
                                    <li><a className='text-dark' href="">Magazalar</a></li>
                                    <li>Diger</li>

                                </ul>
                            </div>

                        </div>


                    </div>


                </div>

                <div className="col-4">

                    <div className='call'>

                        <h2>143</h2>
                    </div>

                    {/* {<Icon path={mdiAccount}
                        title="User Profile"
                        size={2}

                        color="red"


                    />} */}

                </div>


            </div>
            <hr />
        </>
    )
}

export default Header