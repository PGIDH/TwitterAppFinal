function CompoundComponent() {
    return(
        <NavBar>
            <NavBarItem title="" href=""> Link 1 </NavBarItem>
            <NavBarItem title="" href=""> Link 2 </NavBarItem>
            <NavBarItem title="" href=""> Link 3 </NavBarItem>
        </NavBar>
    )
}

function NavBar({children}) {
    return(
        <div className="navBar">{children}</div>
    )
}

function NavBarItem({title,href,children}) {
    return(
        <a title={title} href={href}>{children}</a>
    )
}

export default CompoundComponent;