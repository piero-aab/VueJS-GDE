
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

const ConditionalRendering = {
  data() {
    return {
      seen: true
    }
  }
}
Vue.createApp(ConditionalRendering).mount('#conditional-rendering')

const ArgumentsVue = {
  data() {
    return {
      url: "https://www.youtube.com/watch?v=rY-FJvRqK0E"
    }
  },
  methods: {
    doSomething(event) {
      event.target.setAttribute("href", "https://www.youtube.com/watch?v=rY-FJvRqK0E")
    }
  }
}
Vue.createApp(ArgumentsVue).mount('#argumentsVue')

const DinamicArgumentsVue = {
  data() {
    return {
      url: 'https://www.youtube.com/watch?v=rY-FJvRqK0E',
      attributename: 'href'
    }
  },
  methods: {
    dosomething() {
      return "href"
    }
  }
}

const Modifiers = {
  data() {
    return {
      url: 'https://www.youtube.com/watch?v=rY-FJvRqK0E',
      attributename: 'href'
    }
  },
  methods: {
    onSubmit() {
      alert("evento interrumpido")
    }
  }
}
Vue.createApp(Modifiers).mount('#modifiers')

const Shorthands = {
  data() {
    return {
      url: 'https://www.youtube.com/watch?v=rY-FJvRqK0E',
      key: 'href',
      event: 'click'
    }
  },
  methods: {
    doSomething() {
      return alert("evento click")
    }
  }
}
Vue.createApp(Shorthands).mount('#shorthands')


