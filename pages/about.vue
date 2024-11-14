<script setup lang="ts">
const { add, addCount } = useAddCount()
const counter = useState<number>('counter')
</script>

<template>
  <div>Page: about {{ counter }}</div>
  <button @click="addCount"></button>
</template>

<style scoped></style>
