let ourNames=[
    {   
        id:1,
        names:'Mrs Faith',
        gender:'female',
        rating:5,
        hobby:'js'

    },

    {   
        id:2,
        names:'Miss Laura',
        gender:'female',
        rating:5,
        hobby:'js'

    },

    {   
        id:3,
        names:'Mr Seun',
        gender:'male',
        rating:5,
        hobby:'js'

    },
    
    {   
        id:4,
        names:'Mr Obed',
        gender:'male',
        rating:5,
        hobby:'js'

    },
    {   
        id:5,
        names:'Mr Henry',
        gender:'male',
        rating:'',
        hobby:'js'

    },

]
// internal styling
// style={}
export default function Card(){
    return(
        <>
          {

            ourNames.map((ourName)=>{
                return <>
                <div className="card" style={{width:'500px',height:'500px',backgroundColor:'grey'}}>
                <h1>S/n: {ourName.id}</h1>
                <h1>Name: {ourName.names}</h1>
                <h1>Gender: {ourName.gender}</h1>
                <h1>Rating: {ourName.rating}</h1>
                <h1>Hobby {ourName.hobby}</h1>
                </div>
                </>
            })
          }
          
        </>
    )
}