function searchCity() {
    const city = document.getElementById("cityInput").value.trim();
    if (city) {
        window.location.href = `city.html?city=${city}`;
    }
}