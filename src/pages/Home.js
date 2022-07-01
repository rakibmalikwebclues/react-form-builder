import { Link } from 'react-router-dom'

import banner from "../assets/banner.svg"
import features from "../assets/features.svg"

function Home(){
    return <div>
        <div className="section">
            <img src={banner} alt="banner" />
            <div className="content">
                <h1><span>Form builder</span></h1>
                <p>&nbsp;</p>
                <Link to="/create" className="btn">get started</Link>
            </div>
        </div>
       
    </div>
}

export default Home