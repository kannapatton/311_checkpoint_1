const users = require('../data/users');
let numberOfUsers = users.length;
const sampleUser = require('../data/sampleUser');

//should list all users
const listUsers = (req, res) => {
    res.json(users);
};
//should load by id
const byId = (req, res) => {
    let id = req.params.id -1
    if (users[id]){
      return res.json(users[id])
    }
    else {
        res.status(404).send({ msg: `User with the ID of ${req.params.id} not found!` })
      }};

// should create a new user 
const create = (req, res) => {
    let counter = users.length
    let newUser = sampleUser
    newUser.id = counter + 1
    users.push(newUser)
    return res.json(users[counter])  
  };

// should update a user
const update = (req, res) => {
    let targetId = req.params.id -1
    if (users[targetId]){
      users[targetId].name = sampleUser.name
      return res.json(users[targetId])
    } else {
      res.status(400).send({ msg: `User with the ID of ${req.params.id} not found!` })
    }
  };
//should delete user by id
const deleteUser = (req, res) => {
    let targetId = req.params.id -1
    if (users[targetId]){
      users[targetId].isActive = false
      res.send("Deleted") 
    } else {
      res.status(400).send({ msg: `User with the ID of ${req.params.id} not found!` })
    }};
module.exports = {
    listUsers,
    byId,
    create,
    update,
    deleteUser
};