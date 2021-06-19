const app = Vue.createApp({
    data() {
        return {
            moistTacos: 'dogs',
            prompt: true,
            extraGuests: 0,
        };
    },
    methods: {
        extraGuest() {
            this.extraGuests += 1;
            this.prompt = false;
            console.log('yes this worked');
            console.log(this.extraGuests);
            console.log(this.prompt);
        }
    }
});

app.mount('#application');