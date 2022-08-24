async function jsonToTable(url,table){
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response =  await fetch(url);
    
    const {Countries} = await response.json();

    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";
    console.log(Countries)

    for(const countryText of Countries){
        const headerElement = document.createElement("th");
        headerElement.textContent = countryText;
        
        tableHead.querySelector("tr").appendChild("headerElement")
    }



}
var apiUrl = "https://api.covid19api.com/summary";

jsonToTable(apiUrl,document.querySelector("table"));