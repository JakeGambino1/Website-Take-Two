// document.getElementById('loan-form').addEventListener('submit', calculateResults);
// Delay the calculation for a sec
document.getElementById('loan-form').addEventListener('submit', function(e){
	document.getElementById('results').style.display = 'none';
	document.getElementById('loading').style.display = 'block';
	setTimeout(calculateResults, 2000);

	e.preventDefault();
});

function calculateResults(e){
console.log('button Triggered');
	const amount = document.getElementById('amount');
	const interest = document.getElementById('interest');
	const years = document.getElementById('years');
	const monthlyPayment = document.getElementById('monthly-payment');
	const totalPayment = document.getElementById('total-payment');
	const totalInterest = document.getElementById('total-interest');

	const principal = parseFloat(amount.value);
	const calculatedInterest = parseFloat(interest.value) / 100 / 12;
	const calculatePayments = parseFloat(years.value) * 12;

	const x = Math.pow(1 + calculatedInterest, calculatePayments);
	const monthly = (principal * x * calculatedInterest) / (x - 1);

	if(isFinite(monthly)){
		monthlyPayment.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calculatePayments).toFixed(2);
		totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(2)

		document.getElementById('results').style.display = 'block';
		document.getElementById('loading').style.display = 'none';
	} else {
		// document.getElementById('inputError').innerHTML = 'Please Check Inputs';
		showError('Please check your inputs');
		document.getElementById('results').style.display = 'none';
		document.getElementById('loading').style.display = 'none';
	}
}

function showError(error){
	const errorDiv = document.createElement('div');

	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');

	errorDiv.className = 'alert alert-danger';
	errorDiv.appendChild(document.createTextNode(error));
	card.insertBefore(errorDiv, heading);

	setTimeout(clearError, 3000);
}

function clearError(){
	document.querySelector('.alert').remove();
}