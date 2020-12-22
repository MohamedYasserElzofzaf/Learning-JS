// load the sample weather JSON data
// build a grid of temps over the next 24 hours
// blue background in hours where percipitation possibility is higher than 70%

let uri = "./darksky-sample.json";
let req = new Request(uri, { method: "GET" });
let container, df;
document.addEventListener("DOMContentLoaded", init);

function init() {
    container = document.getElementById("container");
    df = new DocumentFragment();
    fetch(req)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("BAD HTTP");
            }
        })
        .then((json) => {
            json.hourly.data.forEach((hour) => {
                let div = document.createElement("div");
                div.classList.add("hour");
                let span = document.createElement("span");
                span.textContent = "0:00";
                div.appendChild(span);
                df.appendChild(div);
            });
            container.appendChild(df);
        })
        .catch((err) => {
            console.log(err.message);
        });
}