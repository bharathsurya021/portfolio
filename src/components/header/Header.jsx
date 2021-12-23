import { useState } from 'react';
import './header.css'
import Web from './web/Web';
import Mobile from './mobile/Mobile';


function Header() {
    const [isOpen, setIsOpen] = useState(false)


    return <div className="header">
        <div className="logo">
            <a href="../home/Home">Alpha Dev</a>

        </div>
        <div className="menu">
            <div className="web-menu">
                <Web />
            </div>
            <div className="mobile-menu">
                <div onClick={() => setIsOpen(!isOpen)}>
                    <i class="fas fa-bars menu-icon"></i>
                </div>
                {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
        </div>
    </div>;
}

export default Header;
