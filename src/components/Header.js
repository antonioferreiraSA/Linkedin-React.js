import "../components/Header.css";

import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import HeaderOption from "../components/HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import NotificationIcon from "@material-ui/icons/Notifications";
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

function Header() {
  return (

    <div className="header">

      <div className="header__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
        <div className="header__search"><SearchIcon/><input type="text"/></div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'  />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationIcon} title='Notification'/>
        <HeaderOption avatar="https://avatars.githubusercontent.com/u/34191144?v=4" />





      </div>
      
    </div>
  )
}

export default Header;
