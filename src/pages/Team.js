import Auth from '../components/Auth';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import {useState, useEffect} from 'react'

const Team = () => {

    // eslint-disable-next-line
    useEffect(() => { window['resize']() }, [true])

    const [team, loadData] = useState(null)
    useEffect(() => { load().then(data => loadData(data.data)) }, [])

    const load = async () => {
        const data = await fetch("https://fakerapi.it/api/v1/persons?_quantity=10")
        .then(data => data.json())
        console.log(data)
        return data
    }

    useEffect(() => { window['resize']() }, [team])

    return (
        <div className="dashboard">
            <Auth />
            <div className="dash_menu_glass_M"></div>
            <Sidebar active={"_team"} />
            <div className="dash_content">
                <Navbar />
                <div className="dash_display view">
                    <div className="dash_body view">
                        <h1 className="heading1 view"> The Pellsea Team </h1>
                        <table className="table1 view" cellSpacing="0px">
                            <thead>
                                <tr>
                                <th style={{width: "5em", boxSizing: "border-box"}}></th><th style={{minWidth: "30%", width: "100%"}}>Name</th><th className="_M view">Gender</th><th className="_M view">Email</th><th className="_M view">Phone</th>
                                </tr>
                            </thead>
                            <tbody>{ team?
                                 team.map(member => (
                                    <tr key={member.id}>
                                        <td style={{padding: "0em", width: "5em"}}> <img src={member.image} alt=""/> </td>
                                        <td style={{minWidth: "30%", width: "100%"}}>
                                            <span className="member_name">{member.firstname+" "+member.lastname}</span> <span className="details view"> {member.gender[0].toUpperCase()} </span>
                                            <div className="details view"> {member.email}<b style={{paddingLeft: "0.5em", paddingRight: "0.5em"}}>·</b>{member.phone} </div>
                                        </td>
                                        <td className="_M view"> {member.gender[0].toUpperCase()+member.gender.slice(1)} </td><td className="_M view"> {member.email} </td><td className="_M view"> {member.phone} </td>
                                    </tr>
                                ) )
                                :
                                <tr>
                                    <td colSpan="5" style={{padding: "0em"}}>
                                        <div align="center" className="loadError">  
                                            Oops! It's just you yet! Or, maybe you're just not connected to the Internet.
                                        </div>
                                    </td>
                                </tr>
                            }</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
