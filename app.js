const app = Vue.createApp({
    data() {
        return {
            moistTacos: 'dogs',
            prompt: true,
            extraGuests: 0,
        };
    },
    methods: {
        oneGuest() {
            extraGuests = 1;
            prompt = false;
            console.log('yes this worked');
            console.log(extraGuests);
            console.log(prompt);
        }
    }
});

app.mount('#application');