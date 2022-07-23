import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';



Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
      path: '/header',
      name: 'Header',
      component: () =>
          import ('../components/Header/HeaderSinger.vue'),
      children: [
        {
          path: '/modal',
          name: 'Modal',
          
          component: () => import ('../views/Modal'),
        
          meta: {
            showModal: true
          }
        }
      ],
    },
    {
        path: '/singers',
        name: 'SingerView',
        component: () => import ('../views/SingerView.vue')
    },
    {
        path: '/ciphers',
        name: 'CiphersView',
        component: () => import ('../views/CiphersView.vue')
    },
    {
        path: '/events',
        name: 'EventsView',
        component: () => import ('../views/EventsView.vue'),
        meta: {requiresAuth: true},
    },
    {
        path: '/about',
        name: "AboutUsView",
        component: () => import ('../views/AboutUsView.vue')
    },
    /* {
        path: '/login',
        name: "Login",
        component: () => import ('../views/Login.vue')
    }, */
     /* {   
        path: '/modal',
        name: "Modal",
        component: () => import ('../views/Modal')
    },  */
    {
        path: '/eventoexpandido',
        name: "EventoExpandido",
        component: () => import ('../views/EventoExpandido.vue'),
        meta: {requiresAuth: true},
    },
    {
        path: '/posts',
        name: "Posts",
        component: () => import ('../views/Posts.vue'),
        meta: {requiresAuth: true},
    },
    
    
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});


router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!store.getters.isLoggedIn) {  // if (store.getters.isAuthenticated)
        next("/");
        return;
      }
      else {
        next();  // go to wherever I'm going
      }
    } else {
      next(); // does not require auth, make sure to always call next()!
    }
  });
  
  /*router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
      if (store.getters.isAuthenticated) {
        next("/posts");
        return;
      }
      next();
    } else {
      next();
    }
  });

  router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
      if (store.getters.isAuthenticated) {
        next("/eventoexpandido");
        return;
      }
      next();
    } else {
      next();
    }
  });

  router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
      if (store.getters.isAuthenticated) {
        next("/events");
        return;
      }
      next();
    } else {
      next();
    }
  });*/

export default router;