import "./Sidebar.css";

import { Avatar } from "@material-ui/core";
import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-c4d-neon-cool-background-image_205279.jpg" alt=""/>
        <Avatar className="sidebar__avatar"/>
        <h2>Antonio Ferreira</h2>
        <h4>ferreiratoni112@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p> Who Viewed you</p>
          <p className="sidebar__statNumber">2,543</p>

        </div>
        <div className="sidebar__statu">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
          </div>

          <div className="sidebar__bottom">
            <p>Recents</p>

          </div>

      </div>
    </div>
  )
}

export default Sidebar
