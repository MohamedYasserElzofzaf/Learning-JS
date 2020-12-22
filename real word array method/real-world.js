// load the sample weather JSON data
// build a grid of temps over the next 24 hours
// blue background in hours where percipitation possibility is higher than 70%

let uri = "./darksky-sample.json";
let req = new Request(uri, { method: "GET" });
let container, df;