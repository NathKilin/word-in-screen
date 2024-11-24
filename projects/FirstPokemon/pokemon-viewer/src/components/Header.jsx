import { blue } from '@mui/material/colors';
import React from 'react';

function Header(){
    return(
        <header style={{textAlign: 'center', padding: '1rem', backgroundColor: blue}}>
            <h1>Pokémon Viewer App</h1>
        </header>
    )
};

export default Header;