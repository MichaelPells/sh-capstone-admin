import Auth from '../components/Auth';

import { Link } from 'react-router-dom';
import {useEffect} from 'react'

const Signout = () => {

    // eslint-disable-next-line
    useEffect(() => { window['resize']() }, [true])

    const signout = () => {sessionStorage.setItem("authentic", "false")}
    const back = () => {window.history.go(-1)}
    
    return (
        <div className="window">
        <Auth />
        <div align="center" className="page_middle_v">
            <div className="page_middle_h view">
                <h2> Pells<font style={{color: "#223377"}}>ea</font> Mobile </h2>
                <br/><br/>
                <div>
                    <h3>Mr. Michael,</h3><br/>
                    Do you really wish to sign out of
                    <br/>
                    michaela@pellsea.com?
                    <br/><br/><br/>
                <Link onClick={signout} to="/signin"><button className="CTA" style={{width: "35%"}}>Sign Out</button></Link> <button onClick={back} className="CTA2" style={{width: "35%"}}>Back</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Signout
