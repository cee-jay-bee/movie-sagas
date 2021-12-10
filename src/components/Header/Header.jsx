import React, { useEffect } from 'react';
import {Button} from '@material-ui/core';
import {Link} from "react-router-dom";

function Header() {

    

    return (
        <Button><Link to="/addMovie" >Add Movie</Link></Button>
    );
}

export default Header;