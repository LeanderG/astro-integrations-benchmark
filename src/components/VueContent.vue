<script setup>
defineProps({
  heading: String,
  p: String,
});
</script>

<template>
  <h1>{{ heading }}</h1>
  <p>{{ p }}</p>
</template>
