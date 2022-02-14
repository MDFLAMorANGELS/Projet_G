import { createStore } from 'vuex'

const actions = createStore({
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
        createPost({ commit }, post) {
          let token = JSON.parse(localStorage.getItem('user')).token;
          let config = {
            headers:{
              "Authorization":"Barear "+ token
            }
          }
          console.log(post);
          return new Promise((resolve, reject) => {
            axios.post('http://localhost:3000/post/', post,  config  )
              .then((response) => {
                console.log("createPost", response.data);
                commit("addPost", response.data.newPost);
                console.log(response.data);
                resolve(response);
              })
              .catch((error) => {
                console.log(error);
                reject(error);
              });
          });
        },
        getAllPost: ({ commit }) => {
          let token = JSON.parse(localStorage.getItem('user')).token;
          let config = {
            headers:{
              "Authorization":"Barear "+ token
            }
          }
          axios.get('http://localhost:3000/post/', config)
          .then(function (response) {
            commit('poste', response.data);
            console.log(response.data);
          })
          .catch(function (error) {
            throw error
          });
        },
        deletePost({ commit }, post) {
          let token = JSON.parse(localStorage.getItem('user')).token;
          let config = {
            headers:{
              "Authorization":"Barear "+ token
            }
          }
        axios.delete(`http://localhost:3000/post/${post.ID}`, config)
        commit('deletePoste', post.ID);
        },
        createComment({ commit }, comment) {
          let token = JSON.parse(localStorage.getItem('user')).token;
          let config = {
            headers:{
              "Authorization":"Barear "+ token
            }
          }
          const commentData = comment;
          console.log(commentData);
          const createComment = `http://localhost:3000/comment/${comment.ID}`
          return new Promise((resolve, reject) => {
            axios.post(createComment, commentData,  config  )
              .then((response) => {
                console.log(response);
                commit("addComment", response.data.comment[0][0]);
                resolve(response);
              })
              .catch((error) => {
                console.log(error);
                reject(error);
              });
          });
        },
        deleteComment({ commit }, comment) {
          let token = JSON.parse(localStorage.getItem('user')).token;
          let config = {
            headers:{
              "Authorization":"Barear "+ token
            }
          }
        axios.delete(`http://localhost:3000/comment/${comment.ID}`, config)
        .then((response) => {
          console.log(response);
          commit('deleteCommente', comment);
        })
        },
        uploadFile({ commit }, file) {
          let token = JSON.parse(localStorage.getItem('user')).token;
          let config = {
            headers:{
              "Authorization":"Barear "+ token
            }
          }
          console.log(file)
          const formData = new FormData();
          formData.append('file', this.file);
          console.log(formData)
        axios.post(`http://localhost:3000/upload/`,formData , config)
        commit('', );
        },
      },
})

export default actions;