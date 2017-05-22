<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-server-detail></app-server-detail>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>

</template>

<script>
  import Footer from '../shared/Footer.vue'
  import Header from '../shared/Header.vue'
  import Servers from './Servers.vue'
  import ServerDetail from './ServerDetail.vue'
  
  export default {
      components: {
        'app-footer': Footer,
        'app-header': Header,
        'app-servers': Servers,
        'app-server-detail': ServerDetail
      }
  }
</script>
