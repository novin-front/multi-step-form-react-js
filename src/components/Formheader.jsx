import React from 'react';

function Formheader(props) {
    return (
        <>
            {console.log("props.steps", props.steps)}
            <h2 className="form-header">
                {props.steps.title}
            </h2>
            <div className="container">
            <ul id="progressbar">
                    <li className={props.steps.steps >= 1 ? "active" : ""}>
                  <span className="progressbar-icons"><i className="fas fa-cart-arrow-down"></i></span>
                  <span className="form-title">Select Products</span>
              </li>
                    <li className={props.steps.steps >= 2 ? "active" : ""}>
                <span className="progressbar-icons"><i className="far fa-file-alt"></i></span>
                <span className="form-title">Registration</span>
            </li>
                    <li className={props.steps.steps >= 3 ? "active" : ""}>
                <span className="progressbar-icons"><i className="fas fa-shipping-fast"></i></span>
                <span className="form-title">Logistic</span>
            </li>
                    <li className={props.steps.steps >= 4 ? "active" : ""}>
                <span className="progressbar-icons"><i className="fas fa-money-check-alt"></i></span>
                <span className="form-title">Pyment</span>
            </li>
          </ul>
            </div>
            
        </>
    );
}

export default Formheader;