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
            <input type="name" id="username" name="name" placeholder="annonymous">
          </div>

          <!-- REGRET TEXT INPUT -->
          <div class="form">
            <label for="textregret">I regret ...</label>
            <!-- <input type="text" class="textregret" name="textregret"> -->
            <input type="text" maxlength="50" id="regret" ng-model="post">
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

      d3.select("#add").on("mousedown", mousedownAdd);

      var nodes = force.nodes(),
        links = force.links(),
        node = svg.selectAll(".node"),
        link = svg.selectAll(".link");

      restart();

      //hover to show tooltip
      function mouseover(e) {
        console.log(e);
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

      function mousedownAdd() {
        var name = document.getElementById("username").value;
        var regretText = document.getElementById("regret").value;
        var categoryText = document.getElementById("category");
        var categoryIndex = categoryText.selectedIndex;

        console.log(categoryText.value, categoryIndex);

        var point = d3.mouse(this),
          node = {
            x: point[0],
            y: point[1],
            text: "I regret " + regretText + " - Name"
          },
          n = nodes.push(node);

        renderResult(categoryIndex);
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

      function renderResult(categoryIndex) {
        node = node.data(nodes);

        //dots style
        node
          .enter()
          .insert("circle", ".cursor")
          .attr("class", "node")
          .attr("regret", "abc")
          .attr("r", 5)
          // color
          .style("fill", function(d, i) {
            return fill(categoryIndex & 7);
          })
          .style("stroke", function(d, i) {
            return d3.rgb(fill(categoryIndex & 7)).brighter(1);
          })
          .style("stroke-width", 1.5)
          .on("mouseover", mouseover)
          .on("mouseout", mouseout);
        // .on("mousedown", mousedownNode);

        node.exit().remove();

        force.start();
      }

      function restart() {
        node = node.data(nodes);

        //dots style
        node
          .enter()
          .insert("circle", ".cursor")
          .attr("class", "node")
          .attr("regret", "abc")
          .attr("r", 5)
          // color
          .style("fill", function(d, i) {
            return fill(i & 7);
          })
          .style("stroke", function(d, i) {
            return d3.rgb(fill(i & 7)).brighter(1);
          })
          .style("stroke-width", 1.5)
          .on("mouseover", mouseover)
          .on("mouseout", mouseout);
        // .on("mousedown", mousedownNode);

        node.exit().remove();

        force.start();
      }
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
    box-shadow: 0px 0px 15px 0px rgba(#000000, 0.3);
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
