import DP from '../assets/images/DP.jpg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="menu view">
                <div className="bars"> </div>
                <div className="bars"> </div>
                <div className="bars" style={{marginBottom: "0px"}}> </div>
            </div>
            <h2 className="dummy">P</h2>
            <div className="personal">
                <img className="account_image view" src={DP} alt="" />
                <span className="account view">Michael A. <span style={{fontSize: "x-small", verticalAlign: "baseline", color: "#bbbbbb"}}>▼</span></span>
                <b className="account view" style={{color: "#223377", paddingRight: "0px"}}>CEO</b>
            </div>
        </div>
    )
}

export default Navbar
