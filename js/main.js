function searchCity() {
    const city = document.getElementById("citySearch").value.trim().toLowerCase();
    if (city) {
        window.location.href = `city.html?city=${encodeURIComponent(city)}`;
    }
}
