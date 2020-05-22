const getDetails = () => {
    let w = document.getElementById("w").checked ? "work" : "hire";

    let city = gval("drpc");
    let area = gval("area");
    let money = gval("money");
    if (city === 'Agra') {
        document.getElementById("tsh").innerHTML = text.agra;
        document.querySelector('a').href = "https:\/\/www.youtube.com\/";
        document.querySelector('a').innerHTML = "Click here";
    }
    if (city === 'Lucknow') {
        document.getElementById("tsh").innerHTML = text.lucknow;
        document.querySelector('a').href = "https:\/\/www.google.com\/";
        document.querySelector('a').innerHTML = "Click here";
    }
    if (city === 'Kanpur') {
        document.getElementById("tsh").innerHTML = text.kanpur;
        document.querySelector('a').href = "https:\/\/www.facebook.com\/";
        document.querySelector('a').innerHTML = "Click here";
    }
}
var gval = (id) => {
    return document.getElementById(id).value;
}

let text = {
    lucknow: "In Lucknow,You can choose the SPICE CULTIVATION. The details are in this link below:",
    kanpur: "In Kanpur,You can choose the MUSHROOM FARMING. The details are in this link below:",
    agra: "In Agra,You can choose either SPICE CULTIVATION or MUSHROOM FARMING OR BOTH.The details for both are in links respectively: "
}