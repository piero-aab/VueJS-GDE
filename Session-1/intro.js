
// Instanciar Vue
const AppVue = {
  data() {
        return {
            titulo: 'Hola mundo con Vue',
            // arreglo
            frutas: ['Manzana','Pera','Papaya'],
            // objetos
            tios: [
                {nombre:'Ella', estado: 'casada'},
                {nombre:'Se Fue', estado: 'con otro'},
                {nombre:'Sad', estado: 'suicidio'}
            ]
        }
    }
}
Vue.createApp(AppVue).mount('#app')

const CounterApp = {
    data() {
      return {
        counter: 0
      }
    },
    mounted() {
      setInterval(() => {
        this.counter++
      }, 1000)
    }
  }
Vue.createApp(CounterApp).mount('#counter')

const AttributeBinding = {
    data() {
      return {
        message: 'You loaded this page on ' + new Date().toLocaleString()
      }
    }
  }
  
Vue.createApp(AttributeBinding).mount('#bind-attribute')

const EventHandling = {
    data() {
      return {
        message: 'Hello Vue.js!'
      }
    },
    methods: {
      reverseMessage() {
        this.message = this.message
          .split('')
          .reverse()
          .join('')
      }
    }
  }
  
Vue.createApp(EventHandling).mount('#event-handling')

const TwoWayBinding = {
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
}
Vue.createApp(TwoWayBinding).mount('#two-way-binding')

const ConditionalRendering = {
    data() {
      return {
        seen: true
      }
    }
}
Vue.createApp(ConditionalRendering).mount('#conditional-rendering')

const ListRendering = {
    data() {
      return {
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
      }
    }
  }
  
const vueappc = Vue.createApp(ListRendering)

// Define un nuevo componente llamado todo-item

vueappc.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
vueappc.mount('#list-rendering')