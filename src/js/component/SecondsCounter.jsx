import React from "react";
import PropTypes from "prop-types";





export const SecondsCounter = (props) => {
   
   return (
        <>
            

            <div className="row bg-secondary justify-content-around">
                
                <div className="card text-bg-dark text-center" style={{width: "10rem", minHeight: "10rem"}}>
                            
                    <p className="card-text my-auto" style={{fontSize: "8rem"}}><i className="fa-regular fa-clock"></i></p>
                        
                                
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
                        
                            
                    </div>
                    
            </>
    )

};

SecondsNumber.propTypes = {
    second: PropTypes.number
}


