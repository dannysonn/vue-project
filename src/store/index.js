import {createStore} from "vuex";

export default createStore({
    state: {
        likes: 2,
        isAuth: false,
    },
    getters: {
        doubleLikes(state) {
            return state.likes * 2;
        }
    },
    mutations: {
        incrementLikes() {
            this.state.likes += 1;
        },
        decrementLikes() {
            this.state.likes -= 1;
        }
    },
    actions: {

    },
    modules: {

    }
});