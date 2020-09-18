import React,{useState} from 'react';
import Formheader from './Formheader';
import ProductSelect from './FormSteps/ProductSelect';
import Pyment from './FormSteps/Pyment';
import Registration from './FormSteps/Registration';
import Logistic from './FormSteps/Logistic';

function FormWrapper(props) {
    const  stepValidation = (valid) => {
        if (valid){
            setContentSteps(prevState =>{
                return {
                    ...prevState,
                    setpsIsValid : valid,
                }
            })
        }

    }
    const getStepData = (valid,data) => {
        setContentSteps(prevState => {
            return {
                ...prevState,
                formData : data,
                setpsIsValid: valid,
            }
        })
    }
    // state for forms steps and component steps
     const [ContentSteps,setContentSteps]= useState({
        progress : 1,
         title: "Product Select",
         setpsIsValid: false,
         formData: {},
         Steps :[
             { id: 1, component: <ProductSelect key={1} validation={stepValidation} getData={getStepData}  />,title :"Product Select"},
             { id: 2, component: <Registration key={2} validation={stepValidation} getData={getStepData}  />, title : "Registration"},
             { id: 3, component: <Logistic key={3} validation={stepValidation} getData={getStepData}  />, title: "Logistic"},
             { id: 4, component: <Pyment key={4} validation={stepValidation} getData={getStepData}  />, title: "pymeny"}
            ],
        
    });
   
    // function for return now steps  
    const setFormSteps = (key)=>{
        const {Steps} = ContentSteps;
        return Steps.map((step)=>{
            if(step.id === key){
                return step.component;
            }
        });
    }
    // set nav steps in form 
    const setProgressBar = (nowStep,key) =>{
        let newStep;
        const { Steps } = ContentSteps;
        if(key === "next" && (nowStep+1) < 5){
            newStep = ++nowStep; 
        }else if(key === "prev" && (nowStep-1) > 0){
            newStep = --nowStep; 
        }
        let title = "";
        Steps.map((step) => {
            
            if (step.id === nowStep) {
                title = step.title;
                
            }
        });
        

       if(newStep !== undefined){

           if (ContentSteps.setpsIsValid){
               setContentSteps((prevState )=>{
                    return {...prevState,
                            progress : newStep,
                            title
                    }

                })
           }
        
       }
    }
    // function for render button forms 
    const creatBtnForms = (nowStep)=>{
        let btnObjects = {
                prev :<button type="button" className="btn btn-custom prev-btn" onClick={e=>{setProgressBar(ContentSteps.progress,"prev")}}>back</button>,
                next :<button type="button" className="btn btn-custom next-btn" onClick={e=>{setProgressBar(ContentSteps.progress,"next")}}>next</button>,
                finish: <button type="button" className="btn btn-custom-two finished">Buy</button>
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
        <Formheader steps={{ steps: ContentSteps.progress, title: ContentSteps.title}}/>
          <form>
              
          <div className="container-row">
                <div className="card-box">
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