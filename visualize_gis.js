const http = require("http");
const fs = require("fs");

const hostname = "138.197.13.44";
const port = 6666;

fs.readFile("visualize_gis.html", (err, html) => {
    if (err){
        throw err;
    }

    const server=http.createServer((req, res) => {
        res.statusCode=200;
        res.setHeader("Content-type", "text/html");
        res.setHeader("Access-Control-Allow-Origin", "http://138.197.13.44:6666");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST");
        res.write(html);
        res.end();
    });
    
    server.listen(port, hostname, () => {
        console.log("Server started on port "+port);
    });
});

// var dataset = d3.csv("programming_assignment_1_data/ExcelFormattedGISTEMPDataCSV.csv").then(function(data) {
//     console.log(data[0]);
// });
// 
// d3.select("body")
//     .selectAll("p")
//     .data(dataset)
//     .enter()
//     .append("p")
//     .text(function(d) {return d;});
