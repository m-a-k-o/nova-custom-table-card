import Card from './components/Card'

Nova.booting((Vue, router, store) => {
  Vue.component('nova-custom-table-card', Card)
})