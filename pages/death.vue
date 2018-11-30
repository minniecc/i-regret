<template>
  <div class="container _col-12 _tal-ct">
    <div class="how col-12">
      <h1>Death-related Projects</h1>
      <p>about my topic breifly how did i come up with the topic etc Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat inventore, enim illo earum ipsum suscipit perspiciatis voluptate eligendi accusantium assumenda rerum autem, voluptas aut officia maxime quas, animi fugiat qui!</p>
    </div>
    <!-- 1 -->
    <div class="row box col-lg-8 col-md-8 col-10 _dp-b">
      <h2>Death's story</h2>
      <div class="col-12 pic pic1"></div>
      <div class="abouttext col-12 _tal-l">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad enim blanditiis facilis laboriosam sit sequi laudantium facere, ut provident impedit, deserunt, cum non accusantium quis odit omnis veniam voluptatem minus?</p>
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
    <!-- 2 -->
    <div class="row box col-lg-8 col-md-8 col-10 _dp-b">
      <h2>Design your funeral</h2>
      <div class="col-12 pic pic2"></div>
      <div class="abouttext col-12 _tal-l">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere vero eaque blanditiis animi quo numquam alias minus cupiditate! Totam fugit odit veritatis accusantium consequuntur officia itaque. Minima ipsum iusto facere!</p>
        <br>
        <p>
          Try it
          <a
            style="color: white; text-decoration: underline;"
            href="https://myfuneralpicture.firebaseapp.com/funeralpic2/"
            target="_blank"
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

.box {
  background-color: black;
  padding: 20px;
  margin: 30px auto;
  > p {
    color: white;
    text-align: left;
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
  background-image: url("~assets/images/otherpic/death-story.png");
}
.pic2 {
  background-image: url("~assets/images/otherpic/death-story.png");
}
</style>


