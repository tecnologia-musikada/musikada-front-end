import axios from "axios";

const state = {
  user: null,
  posts: null,

  
};


/* console.log(state.user) */
const getters = { 
  isAuthenticated: (state) => !!state.user,
  StatePosts: (state) => state.posts,
  StateUser: (state) => state.user,
  
};

const actions = {
  async Register({dispatch}, form) {
    await axios.post('users', form)
    let UserForm = new FormData()
    UserForm.append('firstName', form.firstName)
    UserForm.append('secondName', form.secondName)
    UserForm.append('lastName', form.lastName)
    UserForm.append('email', form.email)
    UserForm.append('password', form.password)
    await dispatch('LogIn', UserForm)
    
  },

  async LogIn({commit}, user) {
    await axios.post("users/login", user);
    await commit("setUser", user.get("email"));
    /* await commit("setUser", user.get("password")); */
    /* console.log(state.user) */
  },

  /* async CreatePost({ dispatch }, post) {
    await axios.post("post", post);
    return await dispatch("GetPosts");
  },

  async GetPosts({ commit }) {
    let response = await axios.get("posts");
    commit("setPosts", response.data);
  }, */

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, email) {
    state.user = email;
    /* state.user = password; */
  },

  setPosts(state, posts) {
    state.posts = posts;
  },
  logout(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
