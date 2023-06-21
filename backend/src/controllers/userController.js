const {createUser, getUserById}=require('../utils/user');

async function handleCreateUser(req, res){
  
  try{
    const user=req.body;
    const newUser=await createUser(user);
    res.status(201).json(newUser);
    
  }catch(error){
  // server errors
    console.error('Error creating user', error);
    res.status(500).json({
      error:'An error occured while creating the user. '
    })
  }
}

async function handleGetUserById(req, res){
  try{

    const id=req.params.id;
    const user=await getUserById(id);
    if(user){
      res.status(200).json(user);
      
    }else{
      res.status(404).json({
        error:'User not found.'
      })
    }
    
  }catch(error){
    console.error('Error fetching user:', error);
    res.status(500).json({
      error:'An error occured while fetching the user.'
    })
  }
}

module.exports{
  handleCreateUser,
    handleGetUserById.
};