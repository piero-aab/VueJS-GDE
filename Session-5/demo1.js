const titulo = {
    data(){
      return{
        title: "Class and Style Bindings",
      }
    }
}
Vue.createApp(titulo).mount('#titulo')


const sintaxis_de_objeto = {
    data(){
      return{
        isActive: true,
        hasError: false,
        myObject: {
            contenedor: true,
            'text-danger': false
        }
      }
    }
}
Vue.createApp(sintaxis_de_objeto).mount("#sintaxis_de_objeto")

const cb_computed_property = {
    data(){
      return{
        isActive: true,
        error: null
      }
    },
    computed:{
        classObject() {
            return {
              contenedor: this.isActive && !this.error,
              'text-danger': this.error && this.error.type === 'fatal'
              //'text-danger': !(this.error && this.error.type === 'fatal')
            }
        }
    }
}
Vue.createApp(cb_computed_property).mount("#cb_computed_property")


const sintaxis_de_array = {
    data(){
      return{
        isActive: false,
        activeClass: 'contenedor',
        errorClass: 'text-danger'
      }
    }
}
Vue.createApp(sintaxis_de_array).mount("#sintaxis_de_array")



const DemoComponent = {
    data(){
        return{
            isActive: false
        }
    },
}

const demoComponent = Vue.createApp(DemoComponent)

demoComponent.component('my-component', {
    template: `<p class="foo">Hi!</p>`
})

demoComponent.mount('#demoComponent')



const demoComponent2 = Vue.createApp({})

demoComponent2.component('my-component', {
  template: `
    <p :class="$attrs.class">Hi!</p>
    <span>This is a child component</span>
  `
})
demoComponent2.mount('#demoComponent2')


const estilosDemo = {
    data() {
        return {
          activeColor: 'red',
          fontSize: 30,
          styleObject: {
            color: 'blue',
            fontSize: '15px'
          },
          baseStyles: {
            background: 'red',
          },
          overridingStyles: {
            color: '#194064',
            fontSize: '50px',
          }

        }
    }
}
Vue.createApp(estilosDemo).mount("#estilosDemo")


