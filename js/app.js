// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

const { createApp } = Vue

  createApp({
    data() {
      return {
        emails: [],
      }
    },
    methods: {
        pushEmails(n){
            for (let i = 0; i < n; i++){
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) =>{
                      console.log(res)
                      console.log(res.data.response)
                      const email = res.data.response
                      this.emails.push(email)
                    })
                    console.log(this.emails[i])
            }
        }
    },
    created(){
        this.pushEmails(10)
    }
  }).mount('#app')


