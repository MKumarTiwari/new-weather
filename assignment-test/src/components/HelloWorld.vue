<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const places = ref([])

const addPlace = (data) => {
  places.value.push(data)
}


</script>

<template>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
