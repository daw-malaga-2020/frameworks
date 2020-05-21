<template>
	<div>
		<button @click="greet" :style="{color:color}">Di hola</button>
		<button @click="bye" :style="{color:color}">Di adios</button>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop} from "vue-property-decorator";
@Component
export default class MyButton extends Vue {
	
	@Prop() private color
	
	@Emit()
	greet(){
		return "Hola, "
	}

	@Emit()
	bye(){
		return "Adios, "
	}
}
</script>