<template>
  <div id="app" :style="{backgroundColor: color}">
    <h1>{{title}}</h1>
    <h3>
      {{count}} 
      <span v-if="esPar">{{texto}}</span> 
      <span v-else>{{texto}}</span> 
      ==> {{double}}
    </h3>
    <button @click="increment" >Suma 1</button>
  </div>
</template>

<script>

import { ref, reactive, computed,watch } from '@vue/composition-api';

export default {
  name: 'App',
  setup(){

    function hacerDoble(){
      return count.value * 2 
    }

       let esPar = ref(true)

    let title= "Este es mi titular" 
    const count = ref(100);
    const texto = ref("Es par")
    const color = ref("#fff")
    const double = computed(hacerDoble)

    watch( () => count.value, () => {
      if (count.value%2===0){
         texto.value = "Es par"
         esPar.value = true
         color.value = "#fff"
      }else{
         texto.value = "Es impar"
         esPar.value = true
         color.value = "#ff0000"
      }
    });

    const increment = () =>{
      count.value ++
    }
    return {title, texto, color, esPar, count, increment, double}
  }
}
</script>

