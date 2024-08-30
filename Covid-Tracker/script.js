document.addEventListener("DOMContentLoaded", () => {
    // An array of 50 countries (you can add more if needed)
    const countries = [
        "Argentina", "Australia", "Brazil", "Canada", "China", "France", "Germany",
        "India", "Italy", "Japan", "Mexico", "Netherlands", "New Zealand", "Nigeria",
        "Norway", "Pakistan", "Peru", "Philippines", "Poland", "Portugal", "Russia",
        "Saudi Arabia", "South Africa", "South Korea", "Spain", "Sweden", "Switzerland",
        "Turkey", "UAE", "UK", "Vietnam", "Austria", "Belgium", "Chile", "Colombia",
        "Denmark", "Egypt", "Finland", "Greece", "Hungary", "Ireland", "Israel", "Malaysia",
        "Singapore", "Thailand", "Ukraine", "Venezuela"
    ];

    const regionSelect = document.getElementById("region-select");

    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        regionSelect.appendChild(option);
    });

    // Function to fetch and update COVID-19 data
    async function updateCovidData(region) {
        const url = `https://disease.sh/v3/covid-19/countries/${region}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            document.getElementById("total-cases").textContent = data.cases.toLocaleString();
            document.getElementById("total-deaths").textContent = data.deaths.toLocaleString();
            document.getElementById("total-recoveries").textContent = data.recovered.toLocaleString();

            // Update chart data
            updateChart(data);
        } catch (error) {
            console.error("Error fetching COVID-19 data:", error);
        }
    }

    // Function to update the chart
    function updateChart(data) {
        const ctx = document.getElementById("chart").getContext("2d");

        const chartData = {
            labels: ["Cases", "Deaths", "Recoveries"],
            datasets: [
                {
                    label: "COVID-19 Data",
                    data: [data.cases, data.deaths, data.recovered],
                    backgroundColor: ["#3498db", "#e74c3c", "#2ecc71"],
                },
            ],
        };

        new Chart(ctx, {
            type: "bar",
            data: chartData,
        });
    }

    // Initial data update
    updateCovidData("all");

    // Event listener for region selection
    regionSelect.addEventListener("change", (event) => {
        const selectedRegion = event.target.value;
        updateCovidData(selectedRegion);
    });
});