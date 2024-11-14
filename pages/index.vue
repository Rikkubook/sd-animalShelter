<script setup lang="ts">
const { data } = await useFetch(
  'https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=1'
)
const counter = useState<number>('counter', () =>
  Math.round(Math.random() * 1000)
)
</script>

<template>
  <div class="">
    Page: index {{ counter }}
    <p>
      <NuxtLink to="/about">About</NuxtLink>
    </p>
  </div>
</template>

<style scoped></style>
