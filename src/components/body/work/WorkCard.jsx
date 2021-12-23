import './workcard.css';
function WorkCard({item}){
    console.log(item.company)
    return(
        <div className="work-card">
            <img src={item.companyLogo} alt="companylogo" className="work-logo" />
            <div className="work-info">
                <label className="company-name">
                    {item.company}
                </label>
                <div className="work-dates">
                    <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
                </div>
                <div className="work-description">
                    <p>{item.workDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkCard;