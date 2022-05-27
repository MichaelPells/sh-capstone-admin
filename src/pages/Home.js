import {Link} from 'react-router-dom'
import {useEffect} from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HomeGraphs from '../components/HomeGraphs';
import HomeProducts from '../components/HomeProducts';
import HomeTeam from '../components/HomeTeam';
import HomeClients from '../components/HomeClients';

import '../App.css';
import Display from '../assets/images/Display.png'
import Products from '../assets/images/Products.png'

const Homepage = () => {

    // eslint-disable-next-line
    useEffect(() => { window['resize']() }, [true])

    if (sessionStorage.getItem("authentic") === "true") {
        return (
            <div className="dashboard">
                <div className="dash_menu_glass_M"></div>
                <Sidebar active={"_home"} />
                <div className="dash_content">
                    <Navbar />
                    <div className="dash_display view">
                        <div className="dash_body view" style={{padding: "0em"}}>
                            <div className="dash_body_main view">
                                <h1 className="heading3 view"> Overview </h1>
                                <div className="home_aside_mobile view">
                                    <HomeProducts title="Best Selling" quantity="1" theme="_success" effect="_card1_noHoverEffect" info="▲ 105 Sales" />
                                    <div className="home_products_link"><Link to="/products">
                                        <span className="home_products_icon_container"><img src={Products} alt="" className="home_products_icon"/></span>
                                        <span className="home_products_text">View All</span>
                                    </Link></div>
                                </div>
                                <div className="home_topstats view">
                                    <div className="home_graphs view">
                                        <HomeGraphs />
                                    </div>
                                    <div className="home_aside view">
                                        <HomeProducts title="Best Selling" quantity="1" theme="_success" effect="_card1_noHoverEffect"  info="▲ 105 Sales" />
                                        <div className="home_products_link" style={{marginTop: "0.5em"}}><Link to="/products">
                                            <span className="home_products_icon_container"><img src={Products} alt="" className="home_products_icon"/></span>
                                            <span className="home_products_text">View All</span>
                                        </Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="dash_body_sub view">
                                <div className="home_products view">
                                    <HomeProducts title="Newly Stocked Products" />
                                </div>
                                <div className="_M view"><br/></div>
                                <HomeClients title="URGENT: Churn-Likely Customers" theme="_danger" quantity="5" />
                                <div className="stats_separator view"></div>
                                <HomeClients title="Running Ads: 3 New Customers" theme="_success" />
                                <div className="stats_separator view"></div>
                                <HomeTeam theme="_success" />
                                <div className="stats_separator view"></div>
                                <HomeClients title="Last Month's Top Customers" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className="window">
            <div align="center" className="page_middle_v">
                <div className="page_middle_h view">
                    <h1> Pells<font style={{color: "#223377"}}>ea</font> </h1>
                    <div className="home_display"><img src={Display} alt="We are waiting..."/></div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div><b> Your Office </b></div>
                    <br/>
                    <Link to="./signin"><button className="CTA"> Sign In </button></Link>
                </div>
            </div>
            </div>
        )

    }
}

export default Homepage
