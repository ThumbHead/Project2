import React, {useEffect, useState} from 'react';
import './css/style.css';


const Tempapp = () => {

    const[data, setData] = useState(null);
    const[search, setSearch] = useState("Mumbai");

    useEffect( () => {

        const fetchApi = async () => {
            
            
            const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${search}&key=78d2d2849fce4aa9975b406cb9acae9f&include=minutely`);
            const resJson = await response.json();
            setData(resJson.data)
             console.log(resJson);

        };

        
        fetchApi();
    }, [search] )


    return (
        <>
            <div className="box weather">
                <div className="inputData">
                    <input
                        type="search"
                        value={search}
                        className="inputField"
                        onChange= { (event) =>{ setSearch(event.target.value) } } />
                </div>

                {!data ? (
                    <p className="error">No Data Found</p>
                ) : (
                    <div>
                        <div className="info">
                        <h1>{search}</h1> 
                        <h1 className="temp">{data[0].temp}&deg;C </h1>  
                        {/* <h3 className="high-low">Min: {data.temp_min}&deg;C/Max: {data.temp_max}&deg;C</h3> */}
                        </div>
                    </div>
                )}
                             
                

                

                
                    
                     
                
  
              
               
            </div>
            
        </>
    )
}

export default Tempapp
