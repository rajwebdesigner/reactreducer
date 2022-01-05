import React from "react";
import classes from"./Navigation.module.css";

const Navigation = props =>{
    return(
    <React.Fragment>
        <nav className={classes.nav}>
        <ul>
            {props.isLoggedin && 
            <li>Home</li>
            }
            {props.isLoggedin && 
            <li>User</li>
            }
            {props.isLoggedin && 
            <li>Test</li>
            }
            {props.isLoggedin && (
          <li>
            <button onClick={props.isLogout}>Logout</button>
          </li>
        )}
        </ul>
        </nav>
    </React.Fragment>
    )
}

export default Navigation;