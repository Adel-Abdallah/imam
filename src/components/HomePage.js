import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'

const HomePage = () => {
    return (
        <div class="container">
            <div className='section'>
                <h1 className="card-panel orange lighten-3">Welcome to my stupid ass app</h1>
                <ul className='center'>
                    <li className='btn orange lighten-3'><NavLink to="/classposts">ClassComponentPage</NavLink></li>
                    <li className='btn orange lighten-3'><NavLink to="/hooksposts">HooksComponentPage</NavLink></li>
                </ul>


            </div>

        </div>
    );
}

export default withRouter(HomePage);