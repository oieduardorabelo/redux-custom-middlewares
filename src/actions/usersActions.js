import axios from 'axios';

import { FETCH_USER } from '../constants/usersConstants';

export function fetchUsers() {
  const req = axios.get('https://jsonplaceholder.typicode.com/users');

  return {
    type: FETCH_USER,
    payload: req,
  };
}
