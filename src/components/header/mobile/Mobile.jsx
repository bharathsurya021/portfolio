import './mobile.css'
function Mobile({isOpen,setIsOpen}){
    return <div className="mobile">
        <div className="close-icon" onClick={()=> setIsOpen(!isOpen)}>
        <i class="fas fa-times"></i>
        </div>
        <div className="mobile-options">
        <div className="mobile-links">
            <a href="#projects">
                Projects
            </a>
        </div>
        <div className="mobile-links">
            <a href="#skills">
                Skills
            </a>
        </div>
        <div className="mobile-links">
            <a href="#about">
                About
            </a>
        </div>
        <div className="mobile-links">
            <a href="#contact">
                Contact
            </a>
        </div>
        </div>
    </div>
}

export default Mobile;