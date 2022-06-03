export default {
    template: `<div>bar/{{$store.state.count}} </div>`,
    mixins: [],
    data() {
      return {
          theme: 'AdminLte',
          name: 'Bar',
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