<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { RouterView } from 'vue-router';
import SiteNavigation from './components/SiteNavigation.vue'
import SearchInput from './components/SearchInput.vue';
import { ref } from 'vue'
import WeatherCard from './components/WeatherCard.vue';

const places = ref([])

const addPlace = (data) => {
  places.value.push(data)
}
</script>

<template>
  <div class="flex flex-col font-Roboto">
    <SiteNavigation />
    <SearchInput @place-data="addPlace"/>
    </div>

  <!-- Weather Card -->
  <div class="container grid grid-cols-4 gap-4">
      <div v-for="(place, idx) in places" :key="idx">
        <WeatherCard :place="place" @delete-place="deletePlace" />
      </div>
    </div>
</template>

<style scoped>

</style>
