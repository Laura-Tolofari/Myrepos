export default function makeApi(req,res){
    //the req and res are objects 
    //the request objects handles all request while the response handles all response
    //target the kind of request that you are expecting
    if(req.method=="POST"){
        //take user input
        const {firstName,lastName,age,number}=req.body
        //validate user input
        if(firstName==null){
            res.status(203).json({msg:'Please enter firstname'})
        }
        res.status(201).json({msg:'ur stored successfully'})
        //store data in data
    }
}
//mongodb+srv://erelaura1811:scorpio@1811@cluster0.pniww6d.mongodb.net/
//mongodb+srv://erelaura1811:<password>@cluster0.pniww6d.mongodb.net/