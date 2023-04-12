import React from "react";
import PropTypes from "prop-types";





export const SecondsCounter = (props) => {
   
   return (
        <>
            <div className="row justify-content-between bg-secondary">
                
                <div className="card text-bg-dark text-center" style={{width: "10rem", minHeight: "10rem"}}>
                            
                    <p className="card-text my-auto" style={{fontSize: "10rem"}}><i className="fa-regular fa-clock"></i></p>
                        
                                
                </div>
                <SecondsNumber second={parseInt(props.timer / 100000 % 10)}/>
                <SecondsNumber second={parseInt(props.timer / 10000 % 10)}/>
                <SecondsNumber second={parseInt(props.timer / 1000 % 10)}/>
                <SecondsNumber second={parseInt(props.timer / 100 % 10)}/>
                <SecondsNumber second={parseInt(props.timer / 10 % 10)}/>
                <SecondsNumber second={parseInt(props.timer % 10)}/>
            </div>
        </>
           
   );

};


export const SecondsNumber = (props) =>{

    return(

            <>

                    <div className="card text-bg-dark text-center" style={{width: "10rem", minHeight: "10rem"}}>
                            
                        <p className="card-text my-auto" style={{fontSize: "10rem"}}>{props.second}</p>
                        {props.children}
                            
                    </div>
                    
            </>
    )

};

SecondsNumber.propTypes = {
    second: PropTypes.number
}


