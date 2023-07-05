import React from "react";


const Character = (props) => {
    return(
        <div className="card">
            <img src={props.image} className="card-img-top"alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    ) 

}

export default Character