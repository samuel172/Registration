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
      
            this.errors = [];
      
            if (!this.fName1) {
              this.errors.push('Name required.');
            }
            if (!this.sName1) {
              this.errors.push('Age required.');
            }
            if (!this.guestPhone) {
              this.errors.push('Phone Number Required');
            }
            if (!this.guestEmail1) {
              this.errors.push('Email Required');
            } else if (!this.validEmail(this.guestEmail1)) {
              this.errors.push('Valid Email Required');
            }
            
            console.log(this.errors);
            console.log('fName1 is ' + this.fName1);

            if (!this.errors.length) 
              return true;

            e.preventDefault();
          },
          validEmail(guestEmail1) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(guestEmail1);
          }
    }
});

app.mount('#application');