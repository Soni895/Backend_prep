
const data= require("../data.json");
exports.getdata= async (req,res)=>
{
    try {
        console.log(data);
        return res.status(200).json(

            {
                staus:"successful darshan",
                data,

            }
        )
        
    } catch (error) {
        return res.status(500).json(
            {
                status:"failed",
                error
            }
        )
        
    }
}

