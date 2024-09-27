document.getElementById("fetch-btn").addEventListener("click", fetchCryptoPrice);

function fetchCryptoPrice() {
    const crypto = document.getElementById("crypto-select").value;
    const apiURL = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const price = data[crypto].usd;
            document.getElementById("crypto-price").textContent = `1 ${crypto.charAt(0).toUpperCase() + crypto.slice(1)} = $${price}`;
        })
        .catch(error => {
            document.getElementById("crypto-price").textContent = "Please select!!!!";
            console.error("Please select!!!!:", error);
        });
}
