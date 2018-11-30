<template>
  <div class="container _col-12 _tal-ct">
    <div class="how col-12">
      <h1>What is</h1>
    </div>
    <div class="col-5 _mg-at _dp-f _jtfct-ct _alit-ct _bgs-ct _bgpst-ct _bgrp-nrp logo _bgcl-black"></div>
    <!-- 1 -->
    <div class="row box col-lg-8 col-md-8 col-10 _dp-b">
      <h2>BEFORE I DIE, I want to ...</h2>
      <div class="abouttext col-12 _tal-l">
        <p>
          Have you ever made your own bucket list? What was on the list and how many have you checked off so far?
          research about most regret
          Purpose of this website.
          What if you die today, is there anything you wish you could have done?
        </p>
      </div>
    </div>
    <!-- 2 -->
    <div class="row box col-lg-8 col-md-8 col-10 _dp-b">
      <h2>GOOD DEATH</h2>
      <div class="abouttext col-12 _tal-l">
        <p>
          Have you ever wondered when you want to die? How long you want live your life?
          Death is the thing people do not want to talk about even it is something we can not pracetice. When you compare your present age with the age at which you expect to die, how much of your life do you find you’ve already lived? A third, a half, two thirds, or more?
          Having a good death depends on HOW do you live your life. Life is all about "Living" not just "Staying alive".
        </p>
      </div>
    </div>
    <!-- 3 -->
    <div class="row box col-lg-8 col-md-8 col-10 _dp-b">
      <h2>SELF-AWARENESS</h2>
      <div class="abouttext col-12 _tal-l">
        <p>
          Discussion + Reflection + Writing
          These are three main keys of how to start thinking about yourself. What kind of a person do you aspire to be? You can start easy by doing these things.
          - Write a diary. Write about what you are Seeing, Doing, Thinking, Feeling.
          - Make a vision board representing your life.
          - Make time for those little goals of yours. Start small and one step at a time.
        </p>
        <br>
        <p>
          Download the form
          <a
            style="color: white; text-decoration: underline;"
            href="/pdf/death-story.pdf"
            download
          >here</a>.
        </p>
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

.logo {
  height: 200px;
  background-image: url("~assets/images/i-regret-logo-white.png");
}
.box {
  background-color: black;
  padding: 20px;
  margin: 30px auto;
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
  > a {
    color: white;
    text-align: left;
  }
  > p {
    color: white;
    text-align: left;
  }
}
</style>



