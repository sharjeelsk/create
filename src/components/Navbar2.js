import React from 'react'
import {Link} from 'react-router-dom'
const Navbar2 = () => {
    return (
        <nav class="p-2 bg-danger">
              <Link class="mx-3 link" to="/viewexchange">View Exchange</Link>
              <Link class="mx-3 link" to="/addexchange">Add Exchange</Link>
              <Link class="mx-3 link" to="#">History</Link>
              <Link class="mx-3 link" to="#">Blog</Link>
              <Link class="link float-right points"to="#">Buy Points</Link>
         </nav>
    );
}

export default Navbar2;