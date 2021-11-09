import { createStore } from 'vuex'

const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3000/user/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

let user = localStorage.getItem('user');
if (!user) {
  user = {
    userID: -1,
    token: '',
  };
} else {
  try{
  user = JSON.parse(user);
  instance.defaults.headers.common['Authorization'] = user.token;
  } catch (ex) {
    user = {
      userID: -1,
      token: '',
    };
  }
}

const store = createStore({
  state: {
    status: '',
    user: user,
    userInfos: {
      username: '',
      email: '',
      password: '',
    },
    post: {
      titre: '',
      data: '',
    },
  },
  mutations: {
    setStatus: function(state, status) {
      state.status = status;
    },
    logUser: function(state, user) {
      instance.defaults.headers.common['Authorization'] = user.token;
      localStorage.setItem('user', JSON.stringify(user));
      state.user = user;
    },
    userInfos: function(state, userInfos) {
      state.userInfos = userInfos;
    },
    logout: function(state) {
      state.user = {
        userID : -1,
        token : '', 
      }
      localStorage.removeItem('user');
    },
  },
  actions: {
    createAccount: ({ commit }, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
      axios.post('http://localhost:3000/user/signup', userInfos)
      .then(function (response) {
        commit('setStatus', 'created');
        resolve(response);
      })
      .catch(function (error) {
        commit('setStatus', 'error_create');
        reject(error);
      });
      });
    },
    login: ({ commit }, userInfos) => {
      return new Promise((resolve, reject) => {   
      commit('setStatus', 'loading');
      axios.post('http://localhost:3000/user/login', userInfos)
      .then(function (response) {
        commit('setStatus', '');
        commit('logUser', response.data);
        resolve(response);
      })
      .catch(function (error) {
        commit('setStatus', 'error_login');
        reject(error);
      });
      });
    },
    getUserInfos: ({ commit }) => {
      let token = JSON.parse(localStorage.getItem('user')).token;
      let config = {
        headers:{
          "Authorization":"Barear "+ token
        }
      }
      axios.get('http://localhost:3000/user/', config)
      .then(function (response) {
        commit('userInfos', response.data.user[0][0]);
        console.log(response.data.user[0][0])
      })
      .catch(function (error) {
        throw error
      });
    },
    /*createPost: ({ commit }) => {
      let token = JSON.parse(localStorage.getItem('user')).token;
      let config = {
        headers:{
          "Authorization":"Barear "+ token
        }
      }
      axios.post('http://localhost:3000/post/', config)
    },*/
  },
})

export default store;
