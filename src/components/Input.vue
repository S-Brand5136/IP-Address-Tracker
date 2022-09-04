<script setup>
import { reactive, defineProps } from 'vue'
import IconArrow from './icons/IconArrow.vue';

const props = defineProps(['locationData']);
const emit = defineEmits(['submit']);
const state = reactive({ text: "" });

const submitHandler = () => {
  emit('submit', state.text);
  state.text = ""
}
</script>
<template lang="">
  <div class="input-group">
    <input data-testid="user-input" type="text" placeholder="Search for any IP address or domain" :value="state.text" @input="event => state.text = event.target.value">
    <button data-testid="submit-btn" @click="submitHandler">
      <IconArrow /> 
    </button>
  </div>
</template>
<style scoped>
  div.input-group {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 3.5rem;
  }

  input {
    padding-left: 1.5rem;
    border-radius: 15px 0 0 15px;
    border: none;
    height: 100%;
    width: 70%;
  }

  input:hover {
    cursor: pointer;
  }
  
  input::placeholder {
    color: gray;
    font-size: var(--var-fs-text);
  }

  button {
    height: 100%;
    width: 3.5rem;
    border-radius: 0 15px 15px 0;
    border: none;
    background-color: #000;
  }
  
  button:hover{
    background-color: var(--var-c-gray-700);
    cursor: pointer;
  }

  button:active{
    background-color: var(--var-c-gray-500);
  }

</style>