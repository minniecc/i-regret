<template>
  <div class="container _col-12 _tal-ct">
    <div class="how col-12">
      <h1>How does it work?</h1>
    </div>
    <!-- 1 -->
    <div class="row box col-lg-8 col-md-8 col-10 _dp-b">
      <h2>1. add your regret</h2>
      <div class="col-12 pic pic1"></div>
      <div class="abouttext col-12 _tal-l">
        <p>Click anywhere on the black area to start adding your regret. You can either add your name or remain annonymous.</p>
      </div>
    </div>
    <!-- 2 -->
    <div class="row box col-lg-8 col-md-8 col-10 _dp-b">
      <h2>2. choose category</h2>
      <div class="col-12 pic pic2"></div>
      <div class="abouttext col-12 _tal-l">
        <p>After entering your regret, do not forget to choose its category. Regrets are separated by colours so you can see which category people regret the most before they die or even while they are still living.</p>
      </div>
    </div>
    <!-- 3 -->
    <div class="row box col-lg-8 col-md-8 col-10 _dp-b">
      <h2>3. Explore others regrets</h2>
      <div class="col-12 pic pic3"></div>
      <div class="abouttext col-12 _tal-l">
        <p>You can explore other people regrets. See what people regret these days. Which category is the most common one? Do you share any same regrets with other? Is there any regret you used to have but not anymore and how did you deal with that?</p>
      </div>
    </div>
    <!-- 4 -->
    <div class="row box col-lg-8 col-md-8 col-10 _dp-b">
      <h2>4. reflect on yourself</h2>
      <div class="col-12 pic pic4"></div>
      <div class="abouttext col-12 _tal-l">
        <p>Once you have observed all the regrets, take a moment with yourself to think about how you are living your life. What you want to do and how to do it. Take action today. Reflect on yourself. Reflection is very important. It helps you find your place and know your values.</p>
        <br>
        <p>
          Tasha Eurich gave a great talk about how to create self awareness. These are my take-away points for you. You can also watch the talk
          <a
            style="color: white; text-decoration: underline;"
            href="https://www.ted.com/talks/tasha_eurich_increase_your_self_awareness_with_one_simple_fix?language=en"
          >here</a>.
        </p>
        <br>
        <p>- "Thinking about yourself" does not mean "Knowing yourself".</p>
        <p>- Ask "What" not "Why".</p>
        <p>- Think about "who you are", "how others see you" and "how you fit in this world".</p>
      </div>
    </div>
    <!-- 5 -->
    <div class="row box col-lg-8 col-md-8 col-10 _dp-b">
      <h2>5. share this website</h2>
      <div class="col-12 pic pic5"></div>
      <div class="abouttext col-12 _tal-l">
        <p>We need to be more self-awareness and stop wasting our time in this world. Let's spread this website to create awareness to your friends and family.</p>
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
  &:hover .pic1 {
    background-image: url("~assets/images/info/info_iregret-06.png");
  }
  &:hover .pic2 {
    background-image: url("~assets/images/info/info_iregret-07.png");
  }
  &:hover .pic3 {
    background-image: url("~assets/images/info/info_iregret-09.png");
  }
  &:hover .pic4 {
    background-image: url("~assets/images/info/info_iregret-08.png");
  }
  &:hover .pic5 {
    background-image: url("~assets/images/info/info_iregret-10.png");
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

.pic {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: 1s;
}

.pic1 {
  background-image: url("~assets/images/info/info_iregret-01.png");
}
.pic2 {
  background-image: url("~assets/images/info/info_iregret-02.png");
}
.pic3 {
  background-image: url("~assets/images/info/info_iregret-04.png");
}
.pic4 {
  background-image: url("~assets/images/info/info_iregret-03.png");
}
.pic5 {
  background-image: url("~assets/images/info/info_iregret-05.png");
}
</style>


