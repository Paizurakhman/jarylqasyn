<template>
  <div class="info-section">
    <div class="container">
      <h2>Өтетін уақыты мен мекен-жайымыз</h2>
      <div class="row">
        <div class="col-xl-4 col-12 py-4">
          <div class="subtitle">Уақыты:</div>
          <div class="title">20 Қаңтар 18:00</div>
        </div>
        <div class="col-xl-4 col-12 py-4">
          <div class="subtitle">Мекен-жайымыз:</div>
          <div class="title">Ақтөбе қаласы, Проспект Кенес Нокина, 44д</div>
        </div>
        <div class="col-xl-4 col-12 py-4">
          <div class="subtitle">Мейрамхана:</div>
          <div class="title">White Hill
          </div>
        </div>
        <div class="col-xl-4 col-12 py-4">
          <div class="subtitle">Той иелері:</div>
          <div class="title">
            Махамбет & Базаргүл
          </div>
        </div>
      </div>
<!--      <div class="title">Той иелері:</div>-->
<!--      <div class="name">-->
<!--        Махамбет & Базаргүл-->
<!--      </div>-->
      <div class="subtitle mb-4">
        Тойымыздың қадірлі қонағы болыңыздар!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoSection"
}
</script>

<style scoped lang="scss">
.info-section {
  min-height: 50vh;
  background-image: url("@/assets/images/info-bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: grid;
  place-items: center;
  text-align: center;
  .container {
    max-width: 960px;
    margin: 0 auto;
  }
  .title {
    //color: rgb(175, 197, 159);
    font-size: 1.25em;
    font-weight: 400;
  }
  .subtitle {
    font-size: 1em;
    font-weight: 400;
  }
  h2 {
    font-size: 1.5em;
    line-height: 2.5rem;
    margin: 1.5rem 0 0;
  }
  .name {
    font-weight: 600;
    font-size: 1.375em;
    margin-bottom: 16px;
  }
  //.invite-text {
  //  font-weight: 600;
  //  font-style: italic;
  //  font-size: 1.5em;
  //  margin: 2rem 0;
  //}
}
</style>
