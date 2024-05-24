let background = document.getElementById("background");

for (let i = 0; i < 20; i++) {
    let row = document.createElement("div")
    row.classList.add("row");
    for (let j = 0; j < 10; j++) {
        row.innerHTML += `<div>
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-solid fa-file"></i>
        <i class="fa-solid fa-snowflake"></i>
        <i class="fa-solid fa-shirt"></i>
        <i class="fa-solid fa-seedling"></i>
        <i class="fa-solid fa-laptop"></i>
        <i class="fa-solid fa-tower-cell"></i>
        <i class="fa-solid fa-scale-balanced"></i>
        <i class="fa-solid fa-person-walking-luggage"></i>
        <i class="fa-solid fa-mobile-screen"></i>
        <i class="fa-solid fa-glass-water"></i>
        <i class="fa-solid fa-cloud-showers-heavy"></i>
        <i class="fa-solid fa-bed"></i>
        <i class="fa-solid fa-building-columns"></i>
        <i class="fa-solid fa-burst"></i>
        <i class="fa-solid fa-display"></i>
        <i class="fa-solid fa-handshake-simple"></i>
        <i class="fa-solid fa-person-digging"></i>
        <i class="fa-solid fa-pills"></i>
        <i class="fa-solid fa-plate-wheat"></i>
        </div>`;
    }
    background.appendChild(row);
}