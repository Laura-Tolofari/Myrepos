import { useState,useEffect } from "react";

export default function Details (){
    const [movieDetails,setmovieDetails]=useState(false)


     //details functions 
     async function get(){
        const res =await fetch()
        const data1 =await res.json()
        setmovieDetails(data1)
        console.log(data1);
        console.log(movieDetails);
    }
     
            //useffect hook
            useEffect(()=>{
                try{
                    get()
                }
                catch(err){
                    (err)=>{console.log('Connect to internet'+err)}
                }
                console.log(movieDetails);
            },[])
}

//UI
return(
    <>
     {
        movies &&(
        <div>
            {movies.tv_shows.map((movie)=>{
                    return(
                        <>
                        <img src={movie.image_thumbnail_path} alt="" />
                        <p>{movie.name}</p>
                        <button onClick={showDetails}>View more </button>
                          {movieDetails && <div> Movie Details</div>}

                        </>
                    )
                })
            }
        </div>
    ) }
     <button onClick={increasseHandler}>Nextpage</button>
     <button onClick={decreaseHandler}>Prevpage</button>
    </>
)
