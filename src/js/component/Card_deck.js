import React from "react";

export const Card = (props) => {
 return (
      <div class="card-deck">
        <div class="card">
            <img class="card-img-top" src={props.image} alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.description}</p>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src={props.image} alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.description}</p>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src={props.image} alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.description}</p>
            </div>
        </div>
    </div>
    )
 };

