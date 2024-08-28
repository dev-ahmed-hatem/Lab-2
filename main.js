let ele = document.createElement("div");
let h = document.createElement("h3");
let text = document.createTextNode("Header 3");
h.appendChild(text);
ele.appendChild(h);

document.body.appendChild(ele);

for (let i = 0; i < 100; i++) {
    let ele = ele.cloneNode(true);
    document.body.appendChild(ele);
}
