<template>
  <transition name="modal">
    <div class="modal" v-if="modelValue">
      <div class="envelope-container">
        <input id="flap" type="checkbox" @input="$emit('update:modelValue', false)">
        <label class="flap" for="flap"></label>
        <div class="envelope-back"></div>
        <div class="card">Thanks!</div>
        <div class="card-front"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.modal {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9f5db;
  &-enter-from,
  &-leave-to {
    transform: translateY(100%);
  }

  &-enter-active,
  &-leave-active {
    transition: 1.5s ease;
  }
}
input#flap {
  display: none;
}

.envelope-container {
  position: relative;
}

.envelope-back {
  position: relative;
  width: 320px;
  height: 200px;
  background-color: #718355;
}

.envelope-back:before {
  content:"";
  position: absolute;
  background-color: rgba(0,0,0,0.07);
  width: 320px;
  height:10px;
  border-radius:50%;
  top:220px;
}

.card {
  position: absolute;
  width:300px;
  height: 180px;
  background-color: white;
  top:10px;
  left:10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:40px;
  font-family: Brush Script MT;
  transition: .1s;
  z-index:1;
  cursor: pointer;
}

.card-front {
  position: absolute;
  width:0;
  height:0;
  border-bottom: 100px solid #87986a;
  border-left: 160px solid transparent;
  border-right: 160px solid transparent;
  top:100px;
  left:0;
  z-index:3;
}

.card-front:before, .card-front:after {
  content:"";
  position: absolute;
  border-bottom: 100px solid transparent;
  border-top: 100px solid transparent;
  height:0;
  width:0;
}

.card-front:before {
  border-left: 161px solid transparent;
  border-right: 161px solid #97a97c;
  top:-100px;
  left:-162px;
}

.card-front:after {
  border-right: 161px solid transparent;
  border-left: 161px solid #97a97c;
  top:-100px;
  left:-160px;
}

.flap {
  position: absolute;
  width:0;
  height:0;
  border-top: 110px solid #b5c99a;
  border-left: 160px solid transparent;
  border-right: 160px solid transparent;
  top:0;
  left:0;
  cursor: pointer;
  transition: .3s;
  transform-origin: top;
  z-index:4;
}

#flap:checked + .flap {
  transform: rotateX(180deg);
}

#flap:checked ~ .card-front {
  z-index:7;
}

#flap:checked ~ .card {
  z-index:4;
  transform: translateY(-60px);
}
</style>
