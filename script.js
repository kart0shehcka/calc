let a = '';
let b = '';
let sign = ''; //znak
let finish = false; //znak

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '×', '/', '+/-'];
const difference = document.querySelector('.plus-minus');

const out = document.querySelector('.calc-screen p');

function clearAll() {
	a = '';
	b = '';
	sign = '';
	finish = false;
	out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
	if (!event.target.classList.contains('btn')) return;
	if (event.target.classList.contains('ac')) return;

	out.textContent = '';

	const key = event.target.textContent;

	if (digit.includes(key)) {
		if (b === '' && sign === '') {
			a += key;
			console.log(a, b, sign);
			out.textContent = a;

		} else if (a !== '' && b !== '' && finish) {
			b = key;
			finish = false;
			out.textContent = b;
		} else {
			b += key;
			out.textContent = b;
		}
		console.log(a, b, sign);
		return;
	}

	if (action.includes(key)) {
		sign = key;
		out.textContent = sign;
		console.log(a, b, sign);
		return;
	}

	// =====
	if (key === '=') {
		if (b === '') b = a;
		switch (sign) {
			case '+/-':
				if (a === '+/-') {
					a = "-";
				}
				a = -a;
				break;
			case '+':
				a = (+a) + (+b);
				break;
			case '-':
				a = a - b;
				break;
			case '×':
				a = a * b;
				break;
			case '/':
				if (b === '0') {
					out.textContent = "eror";
					a = '';
					b = '';
					sign = '';
					return;
				}
				a = a / b;
				break;
		}
		finish = true;
		out.textContent = a;
	}
};
