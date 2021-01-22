import React from "react";
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigoationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SireDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigoationItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;