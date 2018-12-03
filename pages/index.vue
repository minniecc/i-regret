<template>
  <div class="_w-100pct container">
    <!-- filters -->
    <div class="row filter col-lg-10 col-md-10 col-sm-12 col-12 _fs-6 _jtfct-spbtw">
      <div class="_dp-ilb filter" v-for="(item, i) in regretCategories" :key="i">
        <i class="fas fa-circle" :style="`color: ${item.color}`"></i>
        <span>{{ item.title }}</span>
      </div>
    </div>

    <div class="row playarea">
      <div class="col col-lg-2 col-md-2 col-sm-2 col-2 _dp-b _mg-at _tal-ct popup">
        <form action="#" @submit.prevent>
          <!-- NAME INPUT -->
          <div class="form">
            <label for="name">Name</label>
            <input type="name" id="username" name="name" placeholder="anonymous">
          </div>

          <!-- REGRET TEXT INPUT -->
          <div class="form">
            <label for="textregret">I regret ...</label>
            <!-- <input type="text" class="textregret" name="textregret"> -->
            <input type="text" maxlength="140" id="regret" ng-model="post">
          </div>

          <!-- CATEGORY -->
          <div class="form">
            <label for="regretcategory">Category</label>
            <div class="bio-field -info">
              <div class="bio-select">
                <select id="category">
                  <option disabled>Select dropdown</option>
                  <option v-for="(item, i) in regretCategories" :key="i">{{ item.title }}</option>
                </select>
              </div>
            </div>
          </div>

          <!-- BUTTON -->
          <button type="submit" id="add" name="Add">Add</button>
          <button type="reset" value="Reset">Reset</button>
          <!-- <button><nuxt-link to="/">Cancel</nuxt-link></button> -->
        </form>
      </div>

      <!-- d3 -->
      <div class="col-10 _dp-b _mg-at regret">
        <div id="d3">
          <div id="tooltip"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// Note: 1. import firebase จากไฟล์ที่เราสร้างด้านบน ใช้ @/services หมายถึง rootDir
import firebase from "@/services/firebase";

// Note: 2. สร้าง instance ของ firebase ชื่อ ref
// โดยที่เชื่อมกับ collection ชื่อว่า regrets ดู collection ในหน้า database ของ firebase console ได้ครับ
const ref = firebase.db.collection("regrets");

export default {
  data: () => ({
    regretCategories: [
      {
        title: "Self-worth",
        color: "#3478AF"
      },
      {
        title: "Family",
        color: "#F08637"
      },
      {
        title: "Friends",
        color: "#4F9D3C"
      },
      {
        title: "Love",
        color: "#C63931"
      },
      {
        title: "Education",
        color: "#8B6AAC"
      },
      {
        title: "Career",
        color: "#85584F"
      },
      {
        title: "Bucket List",
        color: "#CE7EB4"
      },
      {
        title: "Other",
        color: "#7F7F7F"
      }
    ]
  }),

  methods: {},
  mounted() {
    if (process.browser) {
      /* SVG frame creation */
      var width = 960,
        height = 500,
        // color
        fill = d3.scale.category10();
      // fill = this.regretCategories.item.color();

      var tooltip = d3.select("#tooltip");

      var _nodes = d3.range(0).map(Object);

      // Note: 3. สร้างตัวแปรชื่อ that มาเก็บค่า this ไว้ก่อน เพราะว่า เวลาเรียกจาก on event ของพวก DOM กับ function ใน vue ค่า this จะ refer ตามที่มันถูกเรียก ดูเรื่อง this, closure, hoisting เรื่อง JavaScript เพิ่มเติม
      const that = this;

      var force = d3.layout
        .force()
        .size([width, height])
        .nodes(_nodes) // initialize with a single node
        .linkDistance(30)
        .charge(-60)
        .on("tick", tick);

      var svg = d3
        .select("#d3")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .on("mousedown", mousedownCanvas);

      // Note: 4 เปลี่ยน handle เป็น onclick และชื่อฟังค์ชันเป็น submit เพื่อให้มันสื่อนะครับ เนื่องจากว่าเป็น button ควรใช้ onclick ดีกว่า
      d3.select("#add").on("click", submit);

      var nodes = force.nodes(),
        links = force.links(),
        node = svg.selectAll(".node"),
        link = svg.selectAll(".link");

      restart();

      //hover to show tooltip
      function mouseover(e) {
        var text = e.text;
        tooltip
          .style("top", event.clientY - 250 + "px")
          .style("left", event.clientX - 350 + "px")
          .style("opacity", 1)
          .html(text);
      }

      function mouseout() {
        tooltip
          .style("top", event.clientY + "px")
          .style("left", event.clientX + "px")
          .style("opacity", 0);
      }

      function submit() {
        var name = document.getElementById("username").value;
        var regretText = document.getElementById("regret").value;
        var categoryText = document.getElementById("category");
        var categoryIndex = categoryText.selectedIndex;

        // Note: 5. ลบที่ handle switch case ออกไป และใช้ access ค่าจากตัวแปรที่ถูกสร้างไว้แล้ว
        // โดยปกติ จะใช้ this.regretCategories เพื่อเข้าถึง data แต่ว่ามันถูกเรียกจาก DOM event ตัว this เลยกลายเป็น <button id="add"></button> แทน ก็เลยใช้ that ที่เก็บไว้มาแทน (that = vue object)
        const category = that.regretCategories[categoryIndex - 1];

        // Note: 6. อันนี้เพิ่มให้ กรณี input field เป็นว่างๆ ให้มัน alert และไม่ต้องเซฟค่า
        if (name === "" && regretText === "") {
          window.alert("Please input your regret text");
          return;
        }

        var point = d3.mouse(this),
          node = {
            x: point[0],
            y: point[1],
            text: "I regret " + regretText + " - " + name,
            color: category.color
          },
          n = nodes.push(node);

        // Note: 7. เพ่ิมข้อมูลลง firebase database
        ref.add({
          name,
          content: regretText,
          category: category.title,
          color: category.color
        });

        renderResult(category.color);

        // Note: 8. reset form หลัง submit
        document.getElementById("username").value = "";
        document.getElementById("regret").value = "";
      }

      function mousedownCanvas() {
        // var inputText = window.prompt("I regret");
        var point = d3.mouse(this),
          node = {
            x: point[0],
            y: point[1],
            text: "I regret " + inputText + " - Name"
          },
          n = nodes.push(node);

        restart();
      }

      function tick() {
        link
          .attr("x1", function(d) {
            return d.source.x;
          })
          .attr("y1", function(d) {
            return d.source.y;
          })
          .attr("x2", function(d) {
            return d.target.x;
          })
          .attr("y2", function(d) {
            return d.target.y;
          });

        node
          .attr("cx", function(d) {
            return d.x;
          })
          .attr("cy", function(d) {
            return d.y;
          });
      }

      function renderResult(categoryColor) {
        node = node.data(nodes);

        //dots style
        node
          .enter()
          .insert("circle", ".cursor")
          .attr("class", "node")
          .attr("regret", "abc")
          .attr("r", 5)
          // color
          .style("fill", categoryColor)
          .style("stroke", categoryColor)
          .style("stroke-width", 1.5)
          .on("mouseover", mouseover)
          .on("mouseout", mouseout);
        // .on("mousedown", mousedownNode);

        node.exit().remove();

        force.start();
      }

      function restart() {
        node = node.data(nodes);

        // Note: 9. ตรงส่วน style('fill') และ style('stroke') ใช้ arrow function เพื่อให้มันดึงค่า key ที่ชื่อว่า color จาก node ออกมา แบบเต็มๆ จะเป็น .style('fill', function(data) { return data.color })
        // ({ color }) => color คือ arrow function และมี destructuring object
        // additional info : https://simonsmith.io/destructuring-objects-as-function-parameters-in-es6/

        node
          .enter()
          .insert("circle", ".cursor")
          .attr("class", "node")
          .attr("regret", "abc")
          .attr("r", 5)
          .style("fill", ({ color }) => color)
          .style("stroke", ({ color }) => color)
          .style("stroke-width", 1.5)
          .on("mouseover", mouseover)
          .on("mouseout", mouseout);
        node.exit().remove();
        force.start();
      }

      // Note: 10. เห็นว่า restart() ถูกเรียกตอนเริ่มและตอน add ก็เลยเพิ่มส่วนที่ดึงข้อมูลจาก firebase
      // ref.get() จะได้เป็น Promise snapshot ต้องเข้าถึงด้วย res.docs และได้เป็น array จึงต้องลูปเพื่อดึงค่าจริงๆออกมา จากนั้นเอาค่าที่ได้ ไปใส่ใน nodes ด้วย nodes.push(data)
      // เข้าถึงค่าใน firebase ด้วย doc.data()
      ref.get().then(res => {
        const regrets = res.docs.map(doc => {
          nodes.push({
            x: 0,
            y: 0,
            text: `I regret ${doc.data().content} - ${doc.data().name}`,
            color: doc.data().color // ค่านี้ใส่ไปเพื่อให้ใน Note 9 เข้าถึงตัวแปร color ได้
          });
        });
        restart();
      });
    }
  }
};
</script>



<style lang="scss" scoped>
.filter {
  margin: auto 0 auto auto;
  padding: 10px;
  font-family: "Work Sans", sans-serif;
}

.playarea {
  margin-bottom: 50px;
  font-family: "Work Sans", sans-serif;
  background-color: #3c3c3b;
}

.regret {
  background: black;
}

.toolsbar {
  background-color: black;
  position: relative;
  padding: 10px;
  z-index: 100;
  & a {
    color: white;
    &:hover {
      color: #98c1d9;
    }
  }
  & i {
    margin: 10px 0px;
  }
  & p {
    font-size: 16px;
    color: #98c1d9;
  }
}

.texttool {
  height: 100%;
  width: 100%;
  color: white;
  display: block;
  opacity: 0;
  transition: opacity 0.2s, visibility 0.2s;
}

.toolsbar:hover .texttool {
  opacity: 1;
}

//d3
#tooltip {
  position: absolute;
  background: #98c1d9;
  top: 250px;
  left: 500px;
  // transition: 0.1s;
  opacity: 0;
  padding: 24px;
}

rect {
  fill: none;
  pointer-events: all;
}

.node {
  fill: #000;
}

// popup
.popup {
  background: #3c3c3b;
  color: white;
  text-transform: uppercase;
  font-size: 15px;
  padding: 10px;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;

  > div {
    position: fixed;
    background: white;
    box-shadow: 0px 0px 15px 0px rgba(black, 0.3);
    padding: 30px 15px;
    /* Width of popup can be changed */
    width: 70%;
    max-width: 600px;
    z-index: 5001;
    left: 50%;
    top: 50%;
    text-align: center;
    border: 5px solid #98c1d9;
  }
}

.form {
  margin-bottom: 10px;
}

input {
  border-radius: 5px;
  border: none;
  height: 30px;
}

select {
  border: none;
}

//button
button {
  background: #98c1d9;
  border: 0;
  border-radius: 4px;
  margin: 10px 5px;
  padding: 7px 15px;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background: lighten(#98c1d9, 10%);
  }
}
</style>
