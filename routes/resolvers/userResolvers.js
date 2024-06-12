const Resolver = {

    Query : {
        user : async(obj,args,context,info) => await context.userModel.find() ,
        singleUser : async(obj,{_id},context,info) =>{
            return await context.userModel.findOne({_id})
        } ,
    },

    Mutation : {
        createUser : async (obj,{user : {firstName , lastName , email , contact}} , context , info) =>{
            return await context.userModel.create({
                firstName,
                lastName,
                email,
                contact
            })
        }
    }
}


module.exports = Resolver;