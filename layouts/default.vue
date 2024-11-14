<script setup lang="ts"></script>

<template>
  <div>
    <NuxtLoadingIndicator color="#d18904" :height="10" :throttle="0" />
    <LayoutsHeader />
    Layout: default
    <slot />
    <LayoutsFooter />
  </div>
</template>

<style scoped></style>
