import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="" activestyle="true">
                        Home
                    </NavLink>
                    <NavLink to="/about" activestyle="true">
                        About
                    </NavLink>
                    <NavLink to="/recipes" activestyle="true">
                        Recipes
                    </NavLink>
                    <NavLink to="/upload" activestyle="true">
                        Upload
                    </NavLink>
                    <NavLink to="/favorite" activestyle="true">
                        Favorites
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;