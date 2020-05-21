<template>
  <div id="app">
    <h1>{{title}}</h1>
    {{data.count}}
    <button @click="increment" >Suma 1</button>
  </div>
</template>

<script>

import { ref, reactive } from '@vue/composition-api';

export default {
  name: 'App',
  setup(){
    let title= "Este es mi titular" 
    const data = reactive({
      count: 100
    });

    const increment = () =>{
      data.count ++
    }
    return {title, data, increment}
  }
}
</script>

