import React,{useState} from 'react';


function ProductSelect(props) {
    const phoneNumberArray = [
        {id : 1 , phone : "09331520933" },
        {id : 2 , phone : "09331520944" },
        {id : 3 , phone : "09331520955" },
        {id : 4 , phone : "09335820853" },
        {id : 5 , phone : "09337890843" },
    ]
    const [PhoneNumber,setPhoneNumber] = useState(phoneNumberArray);
    //the function for render phone number list to this steps
    const renderPhoneNumberList = (arrayNumber)=>{
        return arrayNumber.map(phoneItem => {
            return <li>
            <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id={`number-id-${phoneItem.id}`} name="number" value={phoneItem.phone}/>
        <label className="custom-control-label" htmlFor={`number-id-${phoneItem.id}`}>{phoneItem.phone.replace("0", "")}</label>
              </div>
          </li>
        });
    }
    // this function for search phone Number in array 
    const searchPhoneNumber = (event) =>{
        let input = event.target;
        let newArrayPhone =[];
        phoneNumberArray.map((item)=>{
            if(item.phone.search(input.value) > 0){
                newArrayPhone.push(item)
            }
        });
        if(newArrayPhone.length > 0){
            setPhoneNumber(newArrayPhone);
        }else{
            setPhoneNumber(phoneNumberArray);
        }
    }
    return (
        <>
            <div className="product-box">
                <div className="img-box"></div>
                <div className="product-box-title">
                    <span className="product-title">product title alert </span>
                    <span className="product-title-detail">simple primary</span>
                </div>
                <div className="product-box-price">
                    <div className="price-offer">
                        <span className="badge-off">26</span>
                         <span className="price-text-off">656000</span>
                    </div>
                    <span className="product-price">656000</span>
                    <span className="prdouct-off">free dalivery</span>
                </div>
            </div>
            <ul className="detail-list">
                <li> A simple primary alert—check it out!</li>
                <li> A simple primary alert—check it out!</li>
                <li> A simple primary alert—check it out!</li>
                <li> A simple primary alert—check it out!</li>
            </ul>
            <div className="alert alert-primary" role="alert">
                A simple primary alert—check it out!
              </div>
              <input type="text" className="form-control input-serch" placeholder="search Number" id="search-phone" onChange={e=>{ searchPhoneNumber(e) }} />
              <span className="phone-tilte-list">Choose Phone Numver</span>
              <ul className="phone-number-list">
                  {renderPhoneNumberList(PhoneNumber)}
              </ul>
              <div className="agree-row">
                    <label className="">
                        <input type="checkbox" defaultChecked/>
                        <span className="checkmark"></span>
                        I agree to tems
                    </label>
              </div>
            
        </>
    );
}

export default ProductSelect;