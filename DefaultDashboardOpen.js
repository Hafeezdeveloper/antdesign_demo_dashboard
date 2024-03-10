import React from 'react'
import MainHeader from '../Component/Header/MainHeader'
import AppWidge from '../Component/AppWeidge/AppWidge'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Image1 from "../Assest/images1.png"
import Image2 from "../Assest/images2.png"
import Image3 from "../Assest/images3.png"
import Image4 from "../Assest/images4.png"
import { Typography } from '@mui/material';

const DefaultDashboardOpen = () => {

    let data = [
        {
            icon: Image1,
            total: 60.00,
            title: "Revenue",
            color: '#6610f2'
        },
        {
            icon: Image2,
            total: 10.00,
            title: "Sale Return",
            color: '#ff8952'
        },
        {
            icon: Image3,
            total: 0.00,
            title: "Purchase Return",
            color: '#00c689'
        },
        {
            icon: Image4,
            total: 100.00,
            title: "Profit",
            color: '#297ff9'
        },
    ]

    return (
        <div className='my-3 '>
            <div className='px-2 pb-2'>
                <Typography sx={{ color: "#7c5cc4" }} variant='h5'>Hello <b> Admin </b></Typography>
            </div>
            <div className="row">
                {data.map((x, i) => {
                    return (
                        <div className="col-md-3 col-lg-3 col-sx-12">
                            <AppWidge color={x.color} icon={x.icon} total={x.total} title={x.title} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DefaultDashboardOpen
