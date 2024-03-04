function convert() {
    try {
      const amount = parseFloat(document.getElementById('amount').value);
      const fromCurrency = document.getElementById('from').value;
      const toCurrency = document.getElementById('to').value;
  
      const rates = {
        "USD": {"EUR": 1.1692, "GBP": 0.8526},
        "EUR": {"USD": 0.8550, "GBP": 0.8695},
        "GBP": {"USD": 1.1683, "EUR": 1.1502}
      };
  
      const exchangeRate = rates[fromCurrency][toCurrency];
      const result = amount * exchangeRate;
      document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
  
      if (isNaN(result)) throw new Error('Invalid input');
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('result').innerText = 'An error occurred. Please try again later.';
    }
  }
  