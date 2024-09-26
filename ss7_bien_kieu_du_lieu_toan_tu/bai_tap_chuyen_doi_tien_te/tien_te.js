function changeMoney(){
    let amount = document.getElementById('Amount').value;
    let fromCurrency = document.getElementById('From').value;
    let toCurrency = document.getElementById('To').value;
     
    let result = amount; // Thay đổi giá trị kết quả tùy theo tỉ giá
        if (fromCurrency === 'USD' && toCurrency === 'VND') {
            result = amount * 23000; 
        } else if (fromCurrency === 'VND' && toCurrency === 'USD') {
            result = amount / 23000; 
        }

    document.getElementById('result').innerText = `Kết quả: ${result} ${toCurrency}`;
            
}