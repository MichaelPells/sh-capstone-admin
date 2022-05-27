import React from 'react'

const SidebarItem = ({icon, name}) => {
    return (
        <React.Fragment>
            <img src={icon} className="sidebar_icon" alt=""/>
            <div className="sidebar_name">{ name }</div>
        </React.Fragment>
    )
}

export default SidebarItem
