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
        }
    }
});

app.mount('#application');