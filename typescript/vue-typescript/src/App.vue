<template>
  <div id="app">
    <div class="form">
      <label for="name">
        Nombre
        <input id="name" v-model="me.name" type="text" />
      </label>
      <label for="surname">
        Apellidos
        <input id="surname" v-model="me.surname" type="text" />
      </label>
      <label for="age">
        Edad
        <input id="age" v-model="me.age" type="number" />
      </label>
    </div>
    <div>
      <h4> {{fullname}} has only {{me.age}} <span v-show="isFake">&lt;=== LOL 😂 😂 😂</span> </h4>
      <MyButton @greet="saySomething" @bye="saySomething" color="black"></MyButton>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import MyButton from "./components/MyButton.vue";

interface Person {
  name: string;
  surname: string;
  age: number;
}

@Component({
  components: {MyButton}
})
export default class App extends Vue {

  private isFake:boolean = true
  private me: Person = {
    name: "Álex",
    surname: "Martín",
    age: 25
  };

  @Watch("me.age")
  ageChange(newVal:number){
    if (newVal<39){
      this.isFake = true
    }else{
      this.isFake = false
    }
  }
  get fullname() {
    return `${this.me.name} ${this.me.surname}`;
  }

  saySomething(msg:string){
    alert(`${msg} ${this.fullname}`)
  }

}
</script>