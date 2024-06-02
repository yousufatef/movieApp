<template>
  <div>
    <header
      class="w-full flex justify-center items-center p-2 shadow-lg bg-primary-color text-white"
    >
      <router-link to="/">
        <h1 class="font-bold text-2xl">
          <span class="text-4xl text-secondary-color">TV</span>Movies
        </h1>
      </router-link>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import apikey from "./env";
import axios from "axios";
import { ref } from "vue";

const search = ref("");

const fetchMovie = () => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${apikey.apikey}&t=${search.value}`)
    .then((response) => {
      console.log(response.data);
    });
};
</script>

<style lang="scss" scoped></style>
