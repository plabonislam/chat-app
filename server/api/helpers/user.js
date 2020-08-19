const users = [];
const addUser = ({ id, name, room }) => {
  console.log("yes",id);
   name = name.trim().toLowerCase();
   room = room.trim().toLowerCase();
  const check = users.find((user) => user.room == room && user.name === name);
  if (check) {
    return { error: "user name taken" };
  }
  users.push({ id, name, room });
  return {user:{id,name,room}};
};


const removeUser=({id})=>{
    const value=users.findIndex((user)=>user.id===id);
    if(value !== -1){
      return users.splice(value,1)[0];
    }
}

const getUserId=({id})=>{
  
  const user = users.find((user) => user.id === id);
  console.log(user);
  return user;

}
module.exports = {
  addUser,
  removeUser,
  getUserId,
};