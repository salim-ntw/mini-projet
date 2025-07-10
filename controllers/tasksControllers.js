import tasksModels from "../models/tasksModels.js";

async function getAllTasks(req,res) {
    try{
        let result = await tasksModels.find({})
        res.json({tasks:result})
    }

    catch(err){
     console.log(err);
     res.json({err})
     
    }
}

async function createTask(req,res){
    try{
   const newTask = req.body
  const result =  await tasksModels.create(newTask)
   res.json({message:"new task created successfully",result})
    }

    catch(err){
     console.log(err);
     res.json({err})
     
    }
}

async function updateTask(req, res) {
  try {
    const idToModify = req.params.id;
    const infos = req.body;
    await tasksModels.UpdateOne({_id : idToModify},{...infos});
    res.json({ message: "task has been modified"});
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
}

async function deleteTsk(req, res) {
  try {
    const idTodelete = req.params.id;
    
    await tasksModels.deleteOne({_id : idToDelete});
    res.json({ message: "task has been deleted" });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
}
export { getAllTasks, createTask, updateTask, deleteTsk };