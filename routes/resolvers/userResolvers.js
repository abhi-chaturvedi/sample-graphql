
const paginagtion = (limit,page) => {
    return page ? (page - 1) * limit : 0; 
}

const Resolver = {
    Query : {
        user : async(obj,{pagination : {page , limit}},context,info) => {
            let skip =  paginagtion(limit,page)
            return await context.userModel.find().skip(skip).limit(limit)
        } ,
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