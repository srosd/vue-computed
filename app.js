const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname(){
      if(this.name === '') return ''
      else return this.name + ' ' + 'Ros'; 
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = '';
    },
    outputFullname(){
      if(this.name === '') return ''
      else return this.name + ' ' + 'Ros';
    }
  }
});

app.mount('#events');
