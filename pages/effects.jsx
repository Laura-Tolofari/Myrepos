import { useState,useEffect } from "react";

export default function Movies(){
    const [movies,setMovies]=useState()
    const [currentPage,setcurrentPage]=useState(1)
    const [movieDetails,setmovieDetails]=useState(false)

    function showDetails(){
        setmovieDetails(true)
    }

    // useEffect has two arguments(fn,[])
    //A function and array of dependencies
        function increasseHandler(){
         let newPage=currentPage + 1
         setcurrentPage(newPage)
        }

        function decreaseHandler(){
        if(currentPage==1){
          setcurrentPage(1)
        }
        let newPage=currentPage - 1
        setcurrentPage(newPage)
        }
        //details functions 
        async function get(){
            const res =await fetch()
            const data1 =await res.json()
            setmovieDetails(data1)
            console.log(data1);
            console.log(movieDetails);
        }
           

        useEffect(()=>{
            try{
                get()
            }
            catch(err){
                (err)=>{console.log('Connect to internet'+err)}
            }
            console.log(movieDetails);
        },[])

        //tvshow functions 
        //promises
        async function fetchData(){
            const res =await fetch(`https://www.episodate.com/api/most-popular?pages=${currentPage}`)
            const data =await res.json()
            setMovies(data)
            console.log(data);
            console.log(movies);
        }
        //useffect hook
        useEffect(()=>{
            try{
                fetchData()
            }
            catch(err){
                (err)=>{console.log('Connect to internet'+err)}
            }
            console.log(movies);
        },[currentPage])
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
}