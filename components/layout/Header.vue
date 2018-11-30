<template>
  <!-- 
    Header is a top navigation bar component
    Features:
      - Change moment.js locale
  -->
  <header
    :class="{'has-shadow animate sticky _bgcl-white': $store.state.menuSticky && !$store.state.isMobileMenuActive}"
  >
    <div class="container">
      <div class="menu-container">
        <!-- Branding -->
        <nuxt-link id="branding" class="_w-512px _bgs-ct _bgrp-nrp logo" :to="localePath('index')"></nuxt-link>

        <!-- Menu -->
        <nav
          :class="{'-show-mobile': $store.state.isMobileMenuActive}"
          class="_dp-f _fdrt-cl _h-72px _jtfct-spbtw"
        >
          <!-- about -->
          <div id="extra-bar">
            <nuxt-link to="/about">
              <i class="fas fa-info-circle"></i>
              About
            </nuxt-link>
            <!-- terms -->
            <nuxt-link to="/how">
              <i class="fas fa-question-circle"></i>
              How it works
            </nuxt-link>
            <!-- Project -->
            <nuxt-link to="/death">
              <i class="fas fa-book-dead"></i>
              Other Projects
            </nuxt-link>
            <!-- contact -->
            <nuxt-link to="/contact">
              <i class="fas fa-comment"></i>
              Contact
            </nuxt-link>
          </div>

          <!-- Menu Items -->
          <ul class="nav _tal-ct _tal-l-md">
            <li
              v-scroll-reveal="{delay: i * 100}"
              v-for="(item, i) in $store.state.primaryMenu"
              :key="i"
              class="_pst-rlt list-title _cs-pt _zid-1"
            >
              <div class="_ttf-upc _pdt-16px _pdbt-8px _pdv-0px-md title">
                <!-- Icon -->
                <div v-if="item.submenu">
                  <i :class="item.icon" class="fa-fw fa-md"/>
                  <span class="_pst-rlt _t-2px _ttf-upc" v-html="item.title"/>
                </div>
                <nuxt-link v-else :to="localePath(item.path)">
                  <i :class="item.icon" class="fa-fw fa-md"/>
                  <span class="_pst-rlt _t-2px _ttf-upc" v-html="item.title"/>
                </nuxt-link>
              </div>
            </li>
          </ul>
        </nav>
        <!-- Hamburger Menu Icon -->
        <Hamburger id="hamburger"/>
      </div>
    </div>
    <!-- Loading curtain -->
    <no-ssr>
      <fade-transition>
        <LoadingCurtain v-if="$store.state.isPageLoading"/>
      </fade-transition>
    </no-ssr>
  </header>
</template>

<script>
import LoadingCurtain from "~/components/layout/LoadingCurtain";
import Hamburger from "~/components/layout/Hamburger";
export default {
  components: {
    Hamburger,
    LoadingCurtain
  },
  watch: {
    "$store.state.isSearchModalActive"(val) {
      if (val) {
        this.$modal.show("search");
      } else {
        this.$modal.hide("search");
      }
    }
  },
  created() {
    if (process.browser) {
      this.$moment.locale(this.$store.state.i18n.locale);
      window.addEventListener("scroll", () => {
        if (window.scrollY > 160) {
          this.$store.commit("SET_MENU_STICKY", true);
        } else {
          this.$store.commit("SET_MENU_STICKY", false);
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
@import "~assets/styles/variables";

#lang-switcher {
  > span {
    margin-right: 4px;
    margin-left: 4px;
  }
}

header {
  @media (max-width: $sm) {
    padding: 16px 0px;
  }
  padding: 0px 0px;
}

.logo {
  height: 100px;
  background-image: url("~assets/images/i-regret-logo-black.png");
}

#extra-bar {
  text-align: right;
  margin-top: 10px;
  > div {
    display: inline-block;
    margin: 8px 8px;
    &:last-child {
      margin: 0px;
    }
  }
  > a {
    color: black;
    font-family: "Work Sans", sans-serif;
    // text-transform: uppercase;
    margin-left: 20px;
    &:hover {
      color: #98c1d9;
    }
  }
}

.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0px 12px; */
  #hamburger {
    display: none;
  }
  /* Menu Mobile */
  @media (max-width: $md - 1px) {
    /* Show hamburger */
    #hamburger {
      display: block;
    }
    /* Make nav a modal */
    nav {
      user-select: none !important;
      transition: opacity 0.5s ease-out;
      opacity: 0;
      height: 0;
      overflow: hidden;
      visibility: hidden;
      position: absolute;
      width: 100%;
      min-height: calc(90vh - 90px);
      top: 0px;
      left: 0;
      right: 0;
      padding: 64px 12px 32px 12px;
      background: rgba(255, 255, 255, 0.9);
      z-index: 0;
      box-shadow: 0px 10px 40px -5px rgba(0, 0, 0, 0.1);
      &.-show-mobile {
        visibility: visible;
        opacity: 1;
        height: auto;
        z-index: 1;
      }
    }
  }
}

ul.nav {
  z-index: 10 !important;
  li.list-title {
    @media (min-width: $md) {
      display: inline-block;
      padding: 0px 14px;
      .title {
        font-size: 120%;
      }
      &:last-child {
        padding-right: 0px;
      }
    }
    @media (max-width: $md - 1px) {
      .title {
        font-size: 175%;
      }
    }
  }
}

.list-title {
  &:hover {
    .dropdown {
      visibility: visible;
      opacity: 1;
      height: auto;
      user-select: none !important;
      outline: none !important;
      @media (min-width: $md) {
        left: calc(50% - 100px);
      }
    }
  }
}
</style>
