const Auth = () => {
    if (sessionStorage.getItem("authentic") !== "true") {
        window.location = "./signin"
    }
}

export default Auth