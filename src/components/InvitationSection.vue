<template>
  <div class="invitation-section">
    <div class="container">
      <div class="invitation-text">
        <h2 v-if="name">Құрметті {{name}}!</h2>
        <h2 v-else>Құрметті! ағайын-туыс, бауырлар, құда-жекжат, дос-жаран, әріптестер!</h2>
      </div>

      <div class="invitation-text">
        <h2>Сіз(дер)ді балаларымыз <span class="name">Жарылқасын мен Айзаттың</span> үйлену тойына арналған ақ дастарханымыздың қадірлі қонағы болуға шақырамыз!</h2>
      </div>
    </div>

  </div>
</template>

<script>
import {useRoute} from "vue-router";

export default {
  name: "InvitationSection",
  setup() {
    const route = useRoute()
    const {name} = route.query

    return { name }
  }
}
</script>

<style scoped lang="scss">
  .invitation-section {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 30px 0 0;
    .invitation-text {
      h2 {
        font-size: 1.375em;
      }
      + .invitation-text {
        margin-top: 30px;
      }
    }
    .name {
      //font-family: AsylbekMo, Arial, sans-serif;
      //h2 {
      //  font-size: 3em;
      //}
      //span {
      //  font-size: .5em;
      //}
      font-weight: 600;
    }
  }
</style>
