import React,{useState} from 'react';

function Registration(props) {
    const products = [
        { title: "Poststpaid SIM Card", description: "30GB free internet for 30 days", discount: { has: true, per: 37, price: 60000 }, price: 65000, priceMessage: { text: "Free delivery", class: "prdouct-off" } },
        { title: "Modem Card", description: "30GB free internet for 30 days", discount: { has: false, per: 0, price: 0 }, price: 100000, priceMessage: { text: "silver numbers", class: "prdouct-off-silver" } },
        { title: "SIM Card", description: "30GB free internet for 30 days", discount: { has: true, per: 37, price: 60000 }, price: 200000, priceMessage: { text: "golde delivery", class: "prdouct-off-gold"}}
    ]
    const [ProductList, setProductList] = useState(products);
    const renderProductList = ()=>{
        return ProductList.map(item => {
            let discount="";
            if (item.discount.has){
                discount = <div className="price-offer">
                    <span className="badge-off">{item.discount.per}</span>
                    <span className="price-text-off">{item.discount.price}</span>
                </div>
            }else{
                discount ="";
            }
            return <ul className="product-box-list">
                <li className="product-box-li">
                    <div className="product-box">
                        <div className="img-box"></div>
                        <div className="product-box-title">
                            <span className="product-title">{item.title}</span>
                            <span className="product-title-detail">{item.description}</span>
                        </div>
                        <div className="product-box-price">
                            {discount}
                            
                            <span className="product-price">{item.price}</span>
                            <span className={item.priceMessage.class}>{item.priceMessage.text}</span>
                        </div>
                    </div>
                    <ul className="detail-list">
                        <li>300 GB freee internet for 30 day</li>
                        <li>1000 minutes freee on new voisce for 30 days </li>
                        <li> half pridce one-net and off-net voice for 6 months (30T per minute))</li>
                        <li> 5GB free internet (1GB monthly, staring from the 2nd month)</li>
                        <li>Free delivery</li>
                    </ul>
                </li>
            </ul>
        })
    }
    return (
        <div>
            {renderProductList()}
        </div>
    );
}

export default Registration;