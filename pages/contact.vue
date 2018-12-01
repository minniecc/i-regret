<template>
  <div class="container _col-12 _tal-ct">
    <div class="feedback">
      <h1>Give Feedback</h1>
      <p>This website is a part of my thesis and I would love to hear from all of you.</p>
      <p>Get in touch to give feedbacks on this website or share your story with me :)</p>
    </div>

    <!-- comment form -->
    <div class="row box col-lg-8 col-md-8 col-10 _mg-at _dp-b">
      <form action="mailto:chantchanokch@gmail.com" method="post" enctype="text/plain">
        <div class="bio-input">
          <h2>Name</h2>
          <input type="text" name="Name" placeholder="What should I call you?">
        </div>
        <div class="bio-input">
          <h2>Email</h2>
          <input type="text" name="Email" placeholder="Your Email">
        </div>
        <div class="bio-textarea">
          <h2>Message</h2>
          <textarea rows="3" name="Message" placeholder="Message"></textarea>
        </div>
        <div class="row _pd-12px">
          <input class="bio-button _mg-at" type="submit" value="SEND">
        </div>
      </form>
    </div>

    <!-- minnie social -->
    <div class="row socialcontact col-lg-8 col-md-8 col-10 _dp-b _fs-3">
      <a class="col-3" href="https://www.linkedin.com/in/minniecc/">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a class="col-3" href="https://www.facebook.com/MINNIECHANTCHANOK">
        <i class="fab fa-facebook-square"></i>
      </a>
      <a class="col-3" href="http://line.me/ti/p/~minniecc">
        <i class="fab fa-line"></i>
      </a>
      <a class="col-3" href="mailto:chantchanokch@gmail.com?Subject=" target="_top">
        <i class="far fa-envelope"></i>
      </a>
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

.bio-button {
  background-color: #98c1d9;
  padding: 8px 20px;
}

.feedback {
  padding-bottom: 50px;
}

.box {
  background-color: #3c3c3b;
  padding: 20px;
}

.socialcontact {
  background: #3c3c3b;
  text-align: center;
  margin: 30px auto 50px auto;
  padding: 10px;
  & a {
    color: white;
    &:hover {
      color: #98c1d9;
    }
  }
}
</style>


