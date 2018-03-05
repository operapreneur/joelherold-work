
const svgwidth = '500';
const svgheight = '265';

d3.json("./js/data/resume.json").then(function(data) {
  // console.log(data);
  chart(data.work)
})

var chart = function () {
  const dateFormat = d3.utcParse("%Y-%m-%d");

  const timeScale = d3.scaleTime()
    .domain([new Date(2007, 01, 01), new Date(2018, 04, 01)])
    .range([0, svgwidth]);

  const xAxis = d3.axisBottom()
    .scale(timeScale)
    .tickSize(25, 0, 0)
    .tickSizeOuter(0);

  const grid = d3.select("#timeline")
    .attr("width", svgwidth)
    .attr("height", svgheight)
    .append('g').call(xAxis);
}
