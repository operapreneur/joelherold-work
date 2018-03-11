'use strict';

var svgwidth = '500';
var svgheight = '265';

d3.json("./js/data/resume.json").then(function (data) {
  // console.log(data);
  chart(data.work);
});

var chart = function chart() {
  var dateFormat = d3.utcParse("%Y-%m-%d");

  var timeScale = d3.scaleTime().domain([new Date(2007, 1, 1), new Date(2018, 4, 1)]).range([0, svgwidth]);

  var xAxis = d3.axisBottom().scale(timeScale).tickSize(25, 0, 0).tickSizeOuter(0);

  var grid = d3.select("#timeline").attr("width", svgwidth).attr("height", svgheight).append('g').call(xAxis);
};
//# sourceMappingURL=bundle.js.map
