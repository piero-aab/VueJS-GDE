
// Instanciar Vue
const AppVue = {
  data() {
        return {
            msg1: 'Dato basico',
            msg2: 'Nunca cambiara'
        }
    }
}
Vue.createApp(AppVue).mount('#app')

const CounterApp = {
    data() {
      return {
        rawHtml : '<span style="color:red"> un text de color rojo </span>',
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
        dinamicId: 'id'+Math.random(),
        isBoolean: true
      }
    }
  }
  
Vue.createApp(AttributeBinding).mount('#bind-attribute')

const EventHandling = {
    data() {
      return {
        numerito: 5,
        ok: null,
        message: 'Mensajito reverso en Vue.js!'
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