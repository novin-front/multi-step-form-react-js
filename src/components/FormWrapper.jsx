import React,{useState} from 'react';
import Formheader from './Formheader';
import ProductSelect from './FormSteps/ProductSelect';
import Pyment from './FormSteps/Pyment';
import Registration from './FormSteps/Registration';
import Logistic from './FormSteps/Logistic';

function FormWrapper(props) {
     const [ContentSteps,setContentSteps]= useState({
        progress : 1,
         Steps :[
             {id : 1, component :  <ProductSelect key={1} />},
             {id : 2,component :<Registration key={2}/>},
             {id : 3,component : <Logistic key={3}/>},
             {id : 4,component:<Pyment key={4}/>}
            ],
    });

    const setFormSteps = (key)=>{
        const {Steps} = ContentSteps;
        return Steps.map((step)=>{
            if(step.id === key){
                return step.component;
            }
        });
    }
    const setProgressBar = (nowStep,key) =>{
        let newStep;
        if(key === "next" && (nowStep+1) < 5){
            newStep = ++nowStep; 
        }else if(key === "prev" && (nowStep-1) > 0){
            newStep = --nowStep; 
        }
       if(newStep !== undefined){
        setContentSteps((prevState )=>{
            return {...prevState,
                    progress : newStep,
            }

        })
       }
    }
    const creatBtnForms = (nowStep)=>{
        let btnObjects = {
                prev :<button type="button" className="btn btn-custom" onClick={e=>{setProgressBar(ContentSteps.progress,"prev")}}>back</button>,
                next :<button type="button" className="btn btn-custom" onClick={e=>{setProgressBar(ContentSteps.progress,"next")}}>next</button>,
                finish :<button type="button" className="btn btn-custom-two">Buy</button>
        }
        let btnArray = [];

        switch (true){
            case (nowStep === 1):
                return btnObjects.next;
            case (nowStep > 1 && nowStep < 4):
                    btnArray.push( btnObjects.prev);
                    btnArray.push( btnObjects.next);
                   
                return btnArray;
             case (nowStep === 4):
                    btnArray.push( btnObjects.prev);
                    btnArray.push( btnObjects.finish);
                return btnArray;

        }
    }
    return (
        <>
           <Formheader steps={ContentSteps.progress}/>
          <form>
          <div className="container-row">
                <div className="card-box">
                    {console.log(ContentSteps)}
                   {setFormSteps(ContentSteps.progress)}
                </div>
          </div>
            <div className="btn-wrapper">
                {creatBtnForms(ContentSteps.progress)}
            </div>

          </form>
            
        </>
    );
}

export default FormWrapper;