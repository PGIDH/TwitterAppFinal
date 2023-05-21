import { useState } from "react";
import React from "react";

function FlexibleCompoundComponent() {
    return(
        <NavBar activeIndex={1}>
            <NavBar.Item title="" href=""> Link 1 </NavBar.Item>
            <NavBar.Item title="" href=""> Link 2 </NavBar.Item>
            <NavBar.Item title="" href=""> Link 3 </NavBar.Item>
        </NavBar>
    )
}

function NavBar({children,activeIndex}) {
    const [activeNav,setActiveNav] = useState(activeIndex || 0);
    return(
        <div className="navBar">{
            React.Children.map(children,(child,idx) => {
                return React.cloneElement(child,{
                    index: idx,
                    active: activeNav===idx,
                    onClick: (ev) => {ev.preventDefault(); setActiveNav(idx)}
                })
            })
        }</div>
    )
}

function NavBarItem({title,href,children,onClick,active}) {
    return(
        <div onClick={onClick} className={active ? 'active' : ''} >
        <a title={title}  href={href}>{children}</a>
        </div>
    )
}

NavBar.Item = NavBarItem;

export default FlexibleCompoundComponent;