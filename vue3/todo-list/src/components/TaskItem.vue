<template>
    <li :class="{completed: done}">
        <a href="#" class="form-check" @click="change">
            {{title}}
        </a>
        <i class="remove mdi mdi-close-circle-outline" @click="remove"></i>
    </li>
</template>

<script>
export default {
    name: "TaskItem",
    props: ["title", "done"],
    setup(props,context){

        function change(){
            context.emit("change")
        }

        function remove(){
            context.emit("remove")
        }

        return {
            change,
            remove
        }
    }
}
</script>