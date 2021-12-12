import React from 'react'

import HighlightIcon from '@mui/icons-material/Highlight';
function Header() {
    return (
        <div className='header'>
            <HighlightIcon />
            <h1 className='header-title'> ToDo List</h1>
        </div>
    )
}

export default Header;
