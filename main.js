'use strict';

const { createApp } = Vue;

createApp({
    data(){
        return {
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emails: [],
        };
    },
    mounted(){
        for(let i = 0 ; i < 10 ; i++){
            axios.get(this.apiUrl).then((response) => {
                this.emails.push(response.data.response);
            });
        }
        console.log(this.emails);
    }
}).mount('#app');