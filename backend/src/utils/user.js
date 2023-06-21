const supabase=require("../services/supabaseClientService");

// create a user in the users table
async function createUser(user){
 try{
   const {data, error}=await supabase
                  .from('users')
                  .insert([user]);

   if(error) throw error;

   return data;
 }catch(error){
   console.error('Error creating error', error.message);
   throw error;
 }
  
}

//get userByUserId
async function getUserById(id){
  try{
    const {data, error}=await supabase
                              .from('users')
                              .select('id');
    if(error){
      throw error;
    }

    return data
                              
  }catch(err){
    console.error('Error fetching user', error.message);
    throw error;
  }
}

module.exports={
  createUser, getUserById
};