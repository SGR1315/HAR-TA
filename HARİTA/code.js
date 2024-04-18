// Ülkeleri kıta bazında tutan bir obje
var countries = {
    KUZEYAMERİKA: ["Amerika Birleşik Devletleri", "Kanada", "Meksika"],
    GUNEYAMERİKA: ["Brezilya", "Arjantin", "Kolombiya"],
    AFRİKA: ["Nijerya", "Mısır", "Gana"],
    AVRUPA: ["Almanya", "Fransa", "İngiltere"],
    ASYA: ["Çin", "Hindistan", "Japonya"],
    AVUSTRALYA: ["Avustralya", "Yeni Zelanda"],
    ANTARTİKA: ["Antarktika"]
};

document.addEventListener("DOMContentLoaded", function() {
    var areas = document.getElementsByTagName("area");
    var regionInfo = document.getElementById("region-info");

    for (var i = 0; i < areas.length; i++) {
        areas[i].addEventListener("click", function(e) {
            e.preventDefault();
            var region = this.getAttribute("data-region");
            var countryList = countries[region];
            if (countryList) {
                regionInfo.innerHTML = "<strong>" + region + " Ülkeleri:</strong><br>";
                countryList.forEach(function(country) {
                    regionInfo.innerHTML += country + "<br>";
                });
            } else {
                regionInfo.innerText = "Bu kıtaya ait ülke bulunamadı.";
            }
        });
    }
});
