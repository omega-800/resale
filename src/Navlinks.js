import React from 'react';
import { Link } from 'react-router-dom';
import './Navlinks.css';

function Navlinks(){
    return (
        <div className="navlinks">
            <div className="navlinks__outer">
                <Link>Link</Link>
                <Link>Link</Link>
                <Link>Link</Link>
                <Link>Link</Link>
                <Link>Link</Link>
            </div>
        </div>
    )
}

export default Navlinks;