import axios from 'axios';

export const userService = {
  getUsers,
  makeId
};

function getUsers() {
    return axios.get(`https://randomuser.me/api/?results=10`).then((res) => res.data);
}

function makeId(length) {
let id = ''
  for(let i =0 ; i < length ; i++) {
    id += Math.floor(Math.random() * 10);
  }
  return id
}
  