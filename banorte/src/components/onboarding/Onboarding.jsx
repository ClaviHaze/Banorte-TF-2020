import React from 'react'
import { withRouter } from "react-router-dom";
import Item from '../item/Item';
import Topnav from '../topnav/Topnav';
import Steps from '../steps/Steps';
// import '../../assets/styles/Onboarding';


function Onboarding() {
    return (
        <div className="">
            <Topnav />
            <Item />
            <Steps />
        </div>
    )
}

export default withRouter(Onboarding)
