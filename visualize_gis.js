var dataset = d3.csv("programming_assignment_1_data/gis_temp_data.csv").then(function(data) {
    console.log(data[0]);
});

d3.select("body")
    .selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text(function(d) {return d;});
