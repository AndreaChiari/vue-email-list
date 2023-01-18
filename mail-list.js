console.log('vue ok',Vue)


const app = Vue.createApp({
    name:'Mail list',
    data() {
        return{
            nameMail: []
        }
    },
    methods:{
        getRandomMail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.nameMail.push( response.data.response);
            });

        }
    },

    mounted(){
        for (let i = 0; i < 10; i++){
            this.getRandomMail();
        }
     },
  
    });
    
    app.mount('#root')
            

           
       
    
    
   

 
           
