const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  watch: {
    counter(value) {
      if(value > 50) this.counter = 0;
    }
    // name(value) {
    //   value === '' ? this.fullname = ''
    //   : this.fullname = value + ' ' + this.lastName;
    // },
    // lastName(value) {
    //   value === '' ? this.fullname = ''
    //   : this.fullname = this.name + ' ' + value;
    // }
  },
  computed: {
    fullname(){
      if(this.name === '' || this.lastName === '') return ''
      else return this.name + ' ' + this.lastName; 
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
      this.lastName = '';
    },
    // outputFullname(){
    //   if(this.name === '') return ''
    //   else return this.name + ' ' + 'Ros';
    // }
  }
});

app.mount('#events');
