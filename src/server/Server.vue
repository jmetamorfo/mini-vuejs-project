<template>
  <li class="list-group-item" 
      style="cursor: pointer"
      @click="serverSelected">
    <h1>Server {{server.id}} </h1>
    Server #{{ server }}
  </li>
</template>

<script>
  import { serverBus } from  '../main';

  export default {
      props: ['server'],
      methods: {
        serverSelected() {
          serverBus.$emit('serverSelected', this.server);
        }
      }
  }
</script>
