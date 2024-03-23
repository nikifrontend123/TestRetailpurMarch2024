<template>
    <div :id="section.id" class="section">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    props: ['section']
  };
  </script>
  
  <style scoped>
  .section {
    margin-top: 50px; /* Adjust as needed */
  }
  </style>
  