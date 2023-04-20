const { createApp } = Vue

  createApp({
    data() {
      return {
        toDoList:[],
        input:''
      }
    },
    methods:{
        list(){
            axios.get('server.php').then(response=>{
                this.toDoList = response.data;
            })
        },
        addItem(){

            const inputItem = {
                name : this.input,
                make : false
            }
            const data = {
                toDoItem: inputItem
            }
                

            axios.post('server.php', data,
            {

                headers:{'Content-Type':'multipart/form-data'}

            }
            ).then(response => {
                this.toDoList = response.data;
                this.input = '';
            });
        }
    },
    mounted(){
        this.list();
    }
  }).mount('#app')