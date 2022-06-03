export default {
    template: `
        <div>foo</div>{{ $route.params }}/{{$router}}
    `,
    mixins: [],
    data() {
      return {
          theme: 'AdminLte',
          name: 'Foo',
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