<template>
  <div class="container _col-12 _tal-ct">
    <div class="row how col-lg-8 col-md-8 col-10 _dp-b _mg-at">
      <h1>Death-related Projects</h1>
      <p>I ended up choosing “Death” as my Thesis topic after many indecisive prep-talk sessions with myself. I was once fighting with depression and I think about death a lot more than a normal person would. It all started with “What if I die and mom throws me a really lame funeral?”. So I have created 3 death-related projects about pre-death, post-death and living.</p>
    </div>
    <!-- 1 -->
    <div class="row box col-lg-8 col-md-8 col-10 _dp-b">
      <h2>Death's story</h2>
      <div class="col-12 pic pic1"></div>
      <div class="abouttext col-12 _tal-l">
        <p>On this project, I focused on how to help a family cope with grief of losing a family member. I looked into what death does to those who are left behind. I have found some interesting insights.</p>
        <br>
        <p>When someone you love dies, there is no such thing as moving on.</p>
        <br>
        <p>They need time to heal and continue with their life. Denying that you are coping does not help you get through it but only slow the recovering process. The thing that you can do to heal is to write or talk about the one that died. Get rid of these phrase “Move on” and begin to “Move with” or “Move through” with grief.</p>
        <br>
        <p>People hold on to the past, the stories about their love one. The life they have lived. When we attend to a funeral. Each person related to the death differently, meaning we all have different stories to tell. And I am sure the family would love to hear those stories. So I made a form for the guests to fill-in at a funeral and then I gave them to the family. The stories I have got were quite interesting even though I have never met the guy who died before. But reading those stories, I felt like I know a little bit of his joyful life.</p>
        <br>
        <p>
          Here's the truth, if we move on, let go of and get rid of the people
          that we love who have died. Then guess what, they really are gone. They're just gone forever but if we tell each other's stories and if we use that love to create more love and to multiply each others worlds if we can do that then nobody ever really dies not truly.
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
    <!-- 2 -->
    <div class="row box col-lg-8 col-md-8 col-10 _dp-b">
      <h2>Design your funeral</h2>
      <div class="col-12 pic pic2"></div>
      <div class="abouttext col-12 _tal-l">
        <p>A good death is the death you plan for.</p>
        <br>
        <p>For most people, talking about death is taboo. They feel like they might be jinxing themselves especially for people from my cultural background. I believe everyone has the right to have the funeral they want. So I create this website that people can come to create their funeral picture. The purpose is to create death-awareness because that will reflect on how people is living their life and how they want to be remembered.</p>
        <br>
        <p>After doing an experiment by asking my friends to share their created pictures on their social media, we got different reactions from many different people and for sure made them talk more about death.</p>
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
  background-color: #3c3c3b;
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
  background-image: url("~assets/images/otherpic/deathstory.jpg");
}
.pic2 {
  background-image: url("~assets/images/otherpic/death-story.png");
}
</style>


