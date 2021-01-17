import './css/Content.css';
import WhiteCard from "./WhiteCard"

const Content = () => {
    return ( 
        <div className="content-wrapper">
            <div className="articles-wrapper">
                <WhiteCard/>
            </div>
            <div className="last-viewed-wrapper">
                <WhiteCard/>
            </div>
            <div className="most-viewed-wrapper">
                <WhiteCard/>
            </div>
        </div>
    );
}
 
export default Content;