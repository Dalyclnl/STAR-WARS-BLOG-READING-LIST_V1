import React, {useState,useEffect} from "react";


const People =() => {
    const [people, setPeople] = useState([])

    useEffect(()=>{
        fetch('https://www.swapi.tech/api/people')
        .then((response)=>{
            return response.json()
        }).then((response)=>{
            setPeople(response.result)
        })
    }, [])

    return(
        <div className="container">
            <div className="row">
            {
                people.map((people, index)=>{
                    
                    return <div key={index}>
                        <h4>(people.name) </h4>
                        </div>

                })
            }

            </div>

        </div>

    )


}
export default People;