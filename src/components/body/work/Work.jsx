import './work.css';
import Divider from '../../common/Divider'
import WorkData from '../../../data/WorkData';
import WorkCard from './WorkCard';

function Work(){
    const data = WorkData;
    return(
        <div className="work">
            <Divider/>
            <label className="section-title">Work</label>
            <div className="work-list">
                {data.map((item)=>{
                   return( <WorkCard item={item}/>)
                })}
            </div>
        </div>
    )
}

export default Work;