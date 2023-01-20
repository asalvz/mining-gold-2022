<body>
  <!-- HTML for displaying the prices -->
  <div id="btc-price"></div>
  <div id="eth-price"></div>
  <div id="sol-price"></div>
  
  <script>
    window.onload = function() {
      // Fetch the data from Coinmarketcap API
      fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
        method: 'POST',
        headers: {
          'X-CMC_PRO_API_KEY': 'f496c373-b341-4c86-bf04-953d81225b57',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          symbol: 'BTC,ETH,SOL'
        })
      })
      .then(response => response.json())
      .then(data => {
        // Extract the data for Bitcoin
        let btcData = data.data.BTC;
        document.getElementById("btc-price").innerHTML = `Bitcoin price: $${btcData.quote.USD.price}`;

        // Extract the data for Ethereum
        let ethData = data.data.ETH;
        document.getElementById("eth-price").innerHTML = `Ethereum price: $${ethData.quote.USD.price}`;

        // Extract the data for Solana
        let solData = data.data.SOL;
        document.getElementById("sol-price").innerHTML = `Solana price: $${solData.quote.USD.price}`;
      })
      .catch(error => console.log(error));
    }
  </script>
</body>
