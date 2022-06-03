import {
    computed
} from "vue";

import {
    useStore
} from 'vuex'

export default {
    name: 'Test',
    setup() {
        //-example userStore-------
        const store = useStore();
        const count = computed(() => store.state.count);
        console.log('test--->', count);
        const decrement = () => {
            store.state.count--;
        }
        return {
            count,
            decrement
        }
    },
    template: `<div>test count--> {{ $store.state.count }}//{{count}}</div>
            <input type='button' value='Add'  @click="$store.commit('increment')">
            <input type='button' value='Dec'  @click='decrement'>
  `
}