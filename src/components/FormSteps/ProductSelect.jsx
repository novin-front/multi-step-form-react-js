import React,{useState} from 'react';


function ProductSelect(props) {
    const [formData, setformData] = useState();
    const phoneNumberArray = [
        {id : 1 , phone : "09331520933" },
        {id : 2 , phone : "09331520944" },
        {id : 3 , phone : "09351520955" },
        {id : 4 , phone : "09365820853" },
        {id : 5 , phone : "09378590843" },
    ]
    const [PhoneNumber,setPhoneNumber] = useState(phoneNumberArray);
    //the function for render phone number list to this steps
    const renderPhoneNumberList = (arrayNumber)=>{
        if (arrayNumber.length > 0){
            return arrayNumber.map(phoneItem => {
                return <li>
                    <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input radio-input" id={`number-id-${phoneItem.id}`} name="number" onClick={e => { radioBtnInputcheck(e) }} value={phoneItem.phone} />
                        <label className="custom-control-label" htmlFor={`number-id-${phoneItem.id}`}>{phoneItem.phone.replace("0", "")}</label>
                    </div>
                </li>
            });
        }else{
            return <li>
                <div class="alert alert-danger" role="alert">
                    No number found
                </div>
            </li>
        }
    }
    // this function for search phone Number in array 
    const searchPhoneNumber = (event) =>{
        let input = event.target;
        let value = input.value;
        let newArrayPhone =[];
        phoneNumberArray.map((item)=>{
               if (item.phone.indexOf(value) > -1) {
                   newArrayPhone.push(item)
               }
           
        });
        

        if(newArrayPhone.length > 0){
            setPhoneNumber(newArrayPhone);
        }
        else{
            setPhoneNumber(newArrayPhone);
        }
    }
    // get data form value 
    const radioBtnInputcheck = (event)=>{
        let input = event.target;
        input.checked = true;
        setformData({
            phoneNumber : input.value,
        });
        props.getData(true, {
            phoneNumber: input.value,
        });

       
        
    }
    

    return (
        <>
        <ul className="product-box-list">
                <li className="product-box-li">
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
                        <li>300 GB freee internet for 30 day</li>
                        <li>1000 minutes freee on new voisce for 30 days </li>
                        <li> half pridce one-net and off-net voice for 6 months (30T per minute))</li>
                        <li> 5GB free internet (1GB monthly, staring from the 2nd month)</li>
                        <li>Free delivery</li>
                    </ul>
            </li>
        </ul>
            <div className="alert alert-primary" role="alert">
                A simple primary alert—check it out!
              </div>
              <input type="text" className="form-control input-serch" autoComplete="off" placeholder="search Number" id="search-phone" onKeyUp={e=>{ searchPhoneNumber(e) }} />
              <span className="phone-tilte-list">Choose Phone Numver</span>
              <ul className="phone-number-list">
                  {renderPhoneNumberList(PhoneNumber)}
              </ul>
              <div className="agree-row">
                    <label className="">
                        <input type="checkbox" defaultChecked/>
                        <span className="checkmark pr-1"></span>
                           I agree to tems
                    </label>
              </div>
            
        </>
    );
}

export default ProductSelect;