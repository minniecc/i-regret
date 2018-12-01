<template>
  <div class="container _col-12 _tal-ct">
    <div class="how col-12">
      <h1>What is</h1>
      <img class="_h-128px _bgcl-black" src="~assets/images/i-regret-logo-white.png" alt>
    </div>

    <div class="row box col-lg-8 col-md-8 col-10 _dp-b">
      <h2>BEFORE I DIE, I want to ...</h2>
      <!-- <div class="pic">
            <img src="~assets/images/brand/i-regret-white.png" alt="">
      </div>-->
      <div class="abouttext col-12 _tal-l">
        <p>Have you ever made your own bucket list? What was on the list and how many have you checked off so far?</p>
        <br>
        <p>The regret categories you can find on the homepage are the most common regrets people have.</p>
        <br>
        <p>The purpose of this website is to make you re-think about how you are living your life.</p>
        <p>What if you die today, is there anything you wish you could have done?</p>
      </div>
    </div>

    <div class="row box col-lg-8 col-md-8 col-10 _dp-b">
      <h2>Death-Awareness</h2>
      <div class="abouttext col-12 _tal-l">
        <p>Have you ever wondered when you want to die? How long you want live your life?</p>
        <br>
        <p>
          Death is the thing people do not want to talk about even it is something we can not pracetice.
          When you compare your present age with the age at which you expect to die, how much of your life do you find you’ve already lived? A third, a half, two thirds, or more?
        </p>
        <br>
        <p>Having a good death depends on HOW do you live your life. Life is all about "Living" not just "Staying alive".</p>
      </div>
    </div>

    <div class="row box col-lg-8 col-md-8 col-10 _dp-b">
      <h2>Self-awareness</h2>
      <div class="abouttext col-12 _tal-l">
        <p>Discussion + Reflection + Writing</p>
        <p>
          These are three main keys of how to start thinking about yourself. What kind of a person do you aspire to be?
          You can start easy by doing these things.
        </p>
        <p>- Write a diary. Write about what you are Seeing, Doing, Thinking, Feeling.</p>
        <p>- Make a vision board representing your life.</p>
        <p>- Make time for those little goals of yours. Start small and one step at a time.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 30px;
  font-weight: 600;
  padding: 3% 3%;
  color: black;
}

h2 {
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  color: white;
}

.how {
  padding-bottom: 50px;
}

.box {
  background-color: #3c3c3b;
  padding: 20px;
  margin: 30px auto;
  &:hover {
    box-shadow: 5px 5px 10px #98c1d9;
  }
  > p {
    color: white;
    text-align: left;
  }
  &:hover h2 {
    color: #98c1d9;
  }
}

.abouttext {
  margin: 10px auto;
  > p {
    color: white;
    text-align: left;
  }
}

.pic img {
  height: 200px;
}
</style>



