import React from 'react'
import {useState, useEffect} from 'react'

const Products = ({title, quantity="3", effect="", theme="", info=""}) => {

    const [products, loadData] = useState(null)
    useEffect(() => { load().then(data => loadData(data.data)) }, [])

    const load = async () => {
        const data = await fetch("https://fakerapi.it/api/v1/products?_quantity="+quantity)
        .then(data => data.json())
        console.log(data)
        return data
    }

    useEffect(() => { window['resize']() }, [products])

    return (
        <React.Fragment>
            <h1 className={theme==="_success"? "heading4 view":"heading1 view"}>{ title }</h1>
            <div align="center">{ products?
                products.map(product => (
                    <div className={"card1 "+effect}>
                        <div className="product_name"> { product.name } </div>
                        <img src={ product.image } alt="" className={"product_image"+theme}/>
                        <div className="product_cost">
                            <div>{ "Net Price: ₦"+product.net_price }</div>
                            <div>{ "Taxes: ₦"+product.taxes }</div>
                        </div>
                        <div className={"product_price"+theme} align="right">
                        <span style={{float: "left", fontSize: "small"}}>{info}</span>
                            <b>{ "₦"+product.price }</b></div>
                    </div>
                ) )
                :
                <div align="center" className="loadError">
                    Oops! Someone's not connected to the Internet.
                </div>
            }</div>
        </React.Fragment>
    )
}

export default Products
