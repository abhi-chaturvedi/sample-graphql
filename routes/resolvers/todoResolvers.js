const resolvers = {
    Query : {
        todo : async(obj,args,context,info) => await context.todoModel.find() ,
        singleTodo : async(obj,{_id},context,info) =>{
            console.log("  todoModel : ", context);
            return await context.todoModel.findOne({_id})

        } ,
    },
    Mutation : {
        createTodo : async(obj,{todo : {task, status}},context,info) => await context.todoModel.create({task,status}),

        updateTodo : async(obj,{todo : {_id ,task, status}},context,info) => {
            return await context.todoModel.findOneAndUpdate({_id},{task,status},{new : true})
        },

        deleteTodo : async(obj,{_id},context,info) => await context.todoModel.findOneAndDelete({_id}) 
        
    }
}

module.exports = resolvers;