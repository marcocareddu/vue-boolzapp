console.log('Vue OK', Vue);

const { createApp } = Vue;

const app = createApp({
    data() {
        return {

        }
    }
});

// mount
app.mount('#root');