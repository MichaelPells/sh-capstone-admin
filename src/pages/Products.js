import Auth from '../components/Auth';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import {useState, useEffect} from 'react'

const Products = () => {

    // eslint-disable-next-line
    useEffect(() => { window['resize']() }, [true])

    const [products, loadData] = useState(null)
    useEffect(() => { load().then(data => loadData(data.data)) }, [])

    const load = async () => {
        const data = await fetch("https://fakerapi.it/api/v1/products?_quantity=15")
        .then(data => data.json())
        console.log(data)
        return data
    }

    useEffect(() => { window['resize']() }, [products])

    return (
        <div className="dashboard">
            <Auth />
            <div className="dash_menu_glass_M"></div>
            <Sidebar active={"_products"} />
            <div className="dash_content">
                <Navbar />
                <div className="dash_display view">
                    <div className="dash_body view">
                        <h1 className="heading1 view"> What Are Available? </h1>
                        <div align="center">{ products?
                            products.map(product => (
                                <div className="card1">
                                    <div className="product_name"> { product.name } </div>
                                    <img src={ product.image } alt="" className="product_image"/>
                                    <div className="product_cost">
                                        <div>{ "Net Price: ₦"+product.net_price }</div>
                                        <div>{ "Taxes: ₦"+product.taxes }</div>
                                    </div>
                                    <div className="product_price" align="right"><b>{ "₦"+product.price }</b></div>
                                </div>
                            ) )
                            :
                            <div align="center" className="loadError">
                                Oops! We have nothing yet! Or, maybe you're just not connected to the Internet.
                            </div>
                        }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
