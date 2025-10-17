import "./Mashhura.css"
import React, { useState } from 'react';

import { FiUsers } from "react-icons/fi"; 
import { GiProgression } from "react-icons/gi";
import { FaRegFolderClosed } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";


function Mashhura() {
    
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const SidebarItem = ({ icon, text, open }) => (
    <div className="sidebar_items">
      <div className="icon">{icon}</div>
      {open && <span className="text">{text}</span>}
    </div>
  );

  return (
    <div className='container'>
      <div className="side_bar">
        <div className={`sidebar ${open ? 'open' : 'closed'}`}>
          <div className="logo" onClick={toggleSidebar}>
            {open ? "Manageryo" : "M"}
             
          </div>

          <div className="menu">
            <SidebarItem className="box" icon={<GiProgression />} text="Dashboard" open={open} />
            <SidebarItem className="box" icon={<FaRegFolderClosed />} text="Project" open={open} />
            <SidebarItem className="box" icon={<FiUsers />} text="People" open={open} />
            <SidebarItem className="box" icon={<MdOutlineMessage />} text="Message" open={open} />
            <SidebarItem className="box" icon={<FaRegCalendarAlt />} text="Calender" open={open} />
          </div>

          <div className="support">
            <SidebarItem className="box" text={"WORKSPACE"} open={open} /> 
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mashhura;