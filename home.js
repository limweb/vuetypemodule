export default {
    template: `
     <h2>Home</h2><Test/>
    `,
    mixins: [],
    data() {
      return {
          theme: 'AdminLte',
          name: 'Home',
          uuid: '',
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