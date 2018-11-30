<template>
  <footer>
    <div class="container">
      <div class="row _jtfct-spbtw">
        <!-- Branding, when in mobile stay at bottom -->
        <div class="col-12 _dp-f order-md-first order-last _mgt-32px _mgt-0px-md">
          <div class="col">
            <small>
              All Rights Reserved {{ new Date().getFullYear() }}
              <br>Minnie Chantpakpimon
            </small>
          </div>
          <div class="col share _tal-r">
            <!-- ******EDIT THE WEBSITE***** -->
            <!-- Share web -->
            <small>Share your regrets:</small>
            <!-- Facebook -->
            <a
              class="col-3"
              href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fi-regret.firebaseapp.com%2F"
              target="_blank"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <!-- Twitter -->
            <a
              class="col-3"
              href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fi-regret.firebaseapp.com%2F&text=Let%27s+share+our+regrets%21&hashtags=i-regret"
              target="_blank"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <!-- Email -->
            <a
              class="col-3"
              href="mailto:?subject=I wanted you to see this site&amp;body=Let see what people regret in their life. http://i-regret.firebaseapp.com."
              title="Share by Email"
            >
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "~assets/styles/variables";
footer {
  background: black;
  padding: 32px 0px;
  font-family: "Work Sans", sans-serif;
  color: #fff;
  @media (max-width: $md - 1px) {
    padding: 32px 0px;
  }
}
nav {
  h5 {
    text-transform: capitalize;
    @media (max-width: $md - 1px) {
      margin: 16px 0px;
    }
    @media (min-width: $md) {
      margin-bottom: 16px;
    }
  }
}
.contact-container {
  line-height: 150%;
  font-size: 0.9rem;
}

.share {
  text-align: center;
  & a {
    color: white;
    &:hover {
      color: #98c1d9;
    }
  }
}
</style>
