<template>
  <div>
    <form @submit.prevent="createService">
      <label>Выбери категорию</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>

      <h3>Название услуги</h3>
      <div class="field">
        <label>Title</label>
        <input v-model="event.title" type="text" placeholder="Название"/>
      </div>

      <div class="field">
        <label>Описание</label>
        <input v-model="event.description" type="text" placeholder="Описание"/>
      </div>

      <h3>Цена</h3>
      <div class="field">
        <label>Цена</label>
        <input v-model="event.location" type="text" placeholder="Цена"/>
      </div>

      <input type="submit" class="button -fill-gradient" value="Submit"/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
  },
  data() {
    
  },
  methods: {
    createService() {
      
    }
  }
}
</script>
