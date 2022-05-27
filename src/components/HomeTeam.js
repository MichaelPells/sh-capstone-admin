import React from 'react'
import {useState, useEffect} from 'react'

const HomeTeam = ({theme=""}) => {

    const [team, loadData] = useState(null)
    useEffect(() => { load().then(data => loadData(data.data)) }, [])

    const load = async () => {
        const data = await fetch("https://fakerapi.it/api/v1/persons?_quantity=5")
        .then(data => data.json())
        console.log(data)
        return data
    }

    useEffect(() => { window['resize']() }, [team])

    return (
        <React.Fragment>
            <h1 className={"heading2"+theme+" view"}> Best Sellers This Week </h1>
            { team?
                <table className="table1 view" cellSpacing="0px">
                    <thead>
                        <tr>
                        <th style={{width: "5em", boxSizing: "border-box"}}></th><th style={{minWidth: "30%", width: "100%"}}>Name</th><th className="_M view">Gender</th><th className="_M view">Email</th><th className="_M view">Phone</th>
                        </tr>
                    </thead>
                    <tbody>{ team.map(member => (
                        <tr key={member.id}>
                            <td style={{padding: "0em", width: "5em"}}> <img src={member.image} alt=""/> </td>
                            <td style={{minWidth: "30%", width: "100%"}}>
                                <span className="member_name">{member.firstname+" "+member.lastname}</span> <span className="details view"> {member.gender[0].toUpperCase()} </span>
                                <div className="details view"> {member.email}<b style={{paddingLeft: "0.5em", paddingRight: "0.5em"}}>·</b>{member.phone} </div>
                            </td>
                            <td className="_M view"> {member.gender[0].toUpperCase()+member.gender.slice(1)} </td><td className="_M view"> {member.email} </td><td className="_M view"> {member.phone} </td>
                        </tr>
                    ) ) }</tbody>
                </table>
                :
                <div className="loadError">
                    Oops! Someone's not connected to the Internet.
                </div>
            }
        </React.Fragment>
    )
}

export default HomeTeam
