const app = Vue.createApp({
  data(){
    return{
      carrito: [],
      producto: {
        name: "zapatilla",
        talla: 42,
        color: "blanca"
      },
      status: true,
      stock: 11
    }
  },
  computed:{

  },
  methods: {
    agregar(){
      this.carrito.push(this.producto);
      this.stock--;
      if(!this.stock) this.status=false;
    }
  }
})

const appComponent = app.mount("#app-html")
