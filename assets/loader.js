const delay = (ms) => new Promise((res) => setTimeout(res, ms));

document.onreadystatechange = async () => {

    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible"; 
    document.querySelector(".progress").style.visibility = "visible"; 
    
    if (document.readyState === "complete") {
        await delay(3_000);
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};