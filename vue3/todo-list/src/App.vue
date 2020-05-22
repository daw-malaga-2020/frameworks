<template>
  <div id="app">
     <div class="page-content page-container" id="page-content">
        <div class="padding">
          <div class="row container d-flex justify-content-center">
            <div class="col-lg-12">
              <div class="card px-3">
                <div class="card-body">
                  <h4 class="card-title">Awesome Todo list</h4>
                  <div class="add-items d-flex">
                    <input
                      type="text"
                      v-model="newTaskTitle"
                      class="form-control todo-list-input"
                      placeholder="What do you need to do today?"
                    />
                    <button class="add btn btn-primary font-weight-bold todo-list-add-btn" @click="addItem">
                      Add
                    </button>
                  </div>
                  <div class="list-wrapper">
                    <ul class="d-flex flex-column-reverse todo-list">
                      <TaskItem 
                        v-for="(item,index) in tasks" :key="index" 
                        :title="item.title" :done="item.done" 
                        @change="changeItem(index)"
                        @remove="removeItem(index)"
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem'
import {ref, reactive} from '@vue/composition-api'
export default {
  name: 'App',
  setup(){
    let newTaskTitle = ref("")
    let tasks = reactive([
      {title: "Tarea 1", done: false},
      {title: "Tarea 2", done: true},
      {title: "Tarea 3", done: false}
    ])

    function changeItem(index){
      tasks[index].done = !tasks[index].done
    }

    function removeItem(index){
      tasks.splice(index,1)
    }

    function addItem(){
      let newTask = {
        title: newTaskTitle.value,
        done: false
      }
      tasks.push(newTask)
      newTaskTitle.value = ""
    }

    return {
      tasks,
      newTaskTitle,
      addItem,
      changeItem,
      removeItem
    }
  },
  components:{
    TaskItem
  }
}
</script>