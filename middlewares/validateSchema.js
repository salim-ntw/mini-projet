import z from "zod";

function validateSchema (schema){
    return function middleware1(req,res,next){

        try{
            schema.parse(req.body);
            next();
        }catch(error){
     if (error instanceof z.ZodError){
        return res.status(400).json({error:error.issues[0].message});
     }
        }
        
    }
}

export default validateSchema;