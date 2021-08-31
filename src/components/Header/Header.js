import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';


import HeaderOption from './HeaderOption'
function Header() {
    return (
        <div className="header">
            
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text"/>
                </div>

            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon}title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon}title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon}title="Job"/>
                <HeaderOption Icon={SmsIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsActiveIcon} title="Notification"/>
               <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5603AQEy58bA1Di6eA/profile-displayphoto-shrink_800_800/0/1629308879967?e=1634774400&v=beta&t=TFhDjhHNyt_8Muua_0HNqVGUv5IWK6WR-4baoJfoal0" title="Me"/>
               </div>
        </div>
    )
}

export default Header;
