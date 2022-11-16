import React, { useState } from 'react'
import logo from '../assets/images/logo.png'

export const Menu = () => {
    const [activeMenu, setActiveMenu] = useState('');

    const handleClick = (name) => {
        setActiveMenu(name);
    }

    console.log(activeMenu);

    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <a href="#" className="logo">
                                <img src={logo} alt="Softy Pinko" />
                            </a>
                            <ul className="nav">
                                <li><a href="#welcome" className={activeMenu === 'welcome' ? 'active' : ''} onClick={() => handleClick('welcome')}>Home</a></li>
                                <li><a href="#features"  className={activeMenu === 'features' ? 'active' : ''} onClick={() => handleClick('features')}>About</a></li>
                                <li><a href="#work-process" className={activeMenu === 'work-process' ? 'active' : ''} onClick={() => handleClick('work-process')}>Work Process</a></li>
                                <li><a href="#testimonials" className={activeMenu === 'testimonials' ? 'active' : ''} onClick={() => handleClick('testimonials')}>Testimonials</a></li>
                                <li><a href="#pricing-plans" className={activeMenu === 'pricing-plans' ? 'active' : ''} onClick={() => handleClick('pricing-plans')}>Pricing Tables</a></li>
                                <li><a href="#blog" className={activeMenu === 'blog' ? 'active' : ''} onClick={() => handleClick('blog')}>Blog Entries</a></li>
                                <li><a href="#contact-us" className={activeMenu === 'contact-us' ? 'active' : ''} onClick={() => handleClick('contact-us')}>Contact Us</a></li>
                            </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
