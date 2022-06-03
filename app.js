export default {
    template: `
            <h1>App {{msg}}</h1>
            <Test /> <Home />
            <p>
            <router-link to='/home'>Home</router-link>&nbsp;&nbsp;
            <router-link to='/foo'>Foo</router-link>&nbsp;&nbsp;
            <router-link to='/foo/1'>Foo/1</router-link>&nbsp;&nbsp;
            <router-link to='/bar'>Bar</router-link>
            </p>
            <br/>
            <router-view />
    `,
    mixins: [],
    data() {
      return {
          theme: 'AdminLte',
          name: 'App',
          uuid: '',
          msg:'vuejs 3'
      };
    },
    created() {
      console.log( this.name + 'component is created');
      this.uuid ='idx'+Math.random().toString(36).slice(-6);
    },
    methods: {},
    computed: {},
    mounted() {},
    components:{}
};