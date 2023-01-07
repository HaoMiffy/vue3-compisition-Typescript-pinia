<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="nav">
      <div>
        <router-link to="/" class="item">Home</router-link>
      </div>
      <br />
      <div>
        <router-link to="/about" class="item">About</router-link>
      </div>
    </nav>
    <router-view />
</template>