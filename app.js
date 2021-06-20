const app = Vue.createApp({
    data() {
        return {
            moistTacos: 'dogs',
            prompt: true,
            extraGuests: 0,
            errors: [],
            fName1: null,
            sName1: null,
            guestEmail1: null,
            guestPhone: null,
            dietary1: null,
            fName2: null,
            sName2: null,
            guestEmail2: null,
            dietary2: null,
            fName3: null,
            sName3: null,
            guestEmail3: null,
            dietary3: null,
        };
    },
    methods: {
        extraGuest() {
            this.extraGuests += 1;
            this.prompt = false;
        },
        checkForm(e) {
            if (this.fName1 && this.sName1 && this.guestEmail1 && this.guestPhone) {
              return true;
            }
      
            this.errors = [];
      
            if (!this.fName1) {
              this.errors.push('Name required.');
            }
            if (!this.sName1) {
              this.errors.push('Age required.');
            }
            
            console.log(this.errors);
            console.log('fName1 is ' + this.fName1);
            e.preventDefault();
          }
    }
});

app.mount('#application');