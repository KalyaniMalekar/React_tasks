import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Service() {
  return (
    <section className="service-page">
      <aside className='sideBar'>
        <ul>
          
          <Link to="/service/food">
             <li>Animal Food</li>
          </Link>
          <Link to="/service/spec">
            <li>Species</li>
          </Link>
          <Link to="/service/don">
             <li>Donation</li>
          </Link>
          
        </ul>
      </aside>
      <main className='mainBar'>
        <Outlet/>
      </main>
    </section>
  );
}

export default Service;
