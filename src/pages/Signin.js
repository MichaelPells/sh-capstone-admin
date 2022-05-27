import {useState, useEffect} from 'react'

const Signin = () => {

    if (sessionStorage.getItem("authentic") === "true") {
        window.location = "./"
    }

    // eslint-disable-next-line
    useEffect(() => { window['resize']() }, [true])

    const [info, show] = useState("")

    function Auth(e) {
        e.preventDefault()
        if (e.target.email.value.toLowerCase() === "michaela@pellsea.com" && e.target.password.value === "123456") {
            sessionStorage.setItem("authentic", "true");
            window.location = "./"
        }

        else {
            show("Invalid Login Credentials")
        }
    }
    return (
        <div className="window">
        <div align="center" className="page_middle_v">
            <div className="page_middle_h view">
                <h2> Pells<font style={{color: "#223377"}}>ea</font> Mobile </h2>
                <form onSubmit={Auth}> <div align="left" className="signin_form">
                    
                    <div className="signin_error" align="center">{info}</div>
                    
                    <div className="signin_detail"> Email Address </div>
                    <input type="text" name="email" placeholder="michaela@pellsea.com" className="signin_input"/>
                    <br/>
                    <div className="signin_detail"> Password </div>
                    <input type="password" name="password" placeholder="123456" className="signin_input"/>
                    <br/>
                    <input type="submit" value="Sign In" className="CTA"/>
                </div> </form>
            </div>
        </div>
        </div>
    )
}

export default Signin
