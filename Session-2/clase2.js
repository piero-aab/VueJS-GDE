const app = Vue.createApp({
  data(){
    return{
      flag: true,
    }
  },
  beforeCreate(){
    // al momento de instaciar el vue
    // AUN NO SABE LOS DEMAS VALORES COMO DATA
    console.log("before create")
  },
  created(){
    // despues de leer todos los datos de la instacia de vue
    // AUN NO SABE QUE ES EL ID DEL HTML
    console.log("created")
  },
  beforeMount(){
    // antes de insertar al DOM
    console.log("beforeMount")
  },
  mounted(){
    // al momento de insertar en el DOM
    console.log("mounted")
  },
  beforeUpdate(){
    // antes de hacer una modificacion en el html
    console.log("before update")
  },
  updated(){
    // al momento de hacer alguna modificacion en el html
    console.log("updated")
  },
  beforeUnmount(){
    // antes de destruir la instacia de vue 
    console.log("before unmmount")
  },
  unmounted(){
    // al momento de destruir la instancia de vue
    console.log("unmounted")
  },
  watch: {

  },
  computed:{

  },
  methods: {
    
  }
})

const appComponent = app.mount("#app-html")
