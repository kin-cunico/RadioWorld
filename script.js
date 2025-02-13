document.addEventListener("DOMContentLoaded", async () => {
    const stationSelect = document.getElementById("stationSelect");
    const playButton = document.getElementById("playButton");
    const stopButton = document.getElementById("stopButton");
    const audioPlayer = document.getElementById("audioPlayer");

    try {
        const response = await fetch("radio_stations.json");
        const stations = await response.json();

        Object.keys(stations).forEach(name => {
            const option = document.createElement("option");
            option.value = stations[name];
            option.textContent = name;
            stationSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error loading stations:", error);
    }

    playButton.addEventListener("click", () => {
        const selectedStation = stationSelect.value;
        if (selectedStation) {
            audioPlayer.src = selectedStation;
            audioPlayer.play();
        }
    });

    stopButton.addEventListener("click", () => {
        audioPlayer.pause();
        audioPlayer.src = "";
    });
});
