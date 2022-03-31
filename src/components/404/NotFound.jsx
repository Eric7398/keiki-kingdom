import React from 'react'
import TransitionPage from '../TransitionPage'
import './NotFoundStyles.css'

const NotFound = () => {
    return (
        <TransitionPage>

            <section className="page_404">
                <div className="container">
                    <h1 className='title'>404</h1>
                    <h1 className='sub'>NOT FOUND</h1>
                    <h3>
                        Looks like you're lost
                    </h3>
                    <button><a href="/" className="link_404">Go to Home</a></button>
                </div>
                <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
            </section>
        </TransitionPage>
    )
}

export default NotFound