
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowDown' || e.key === 'Down') {
        moveVertical(avatar, 50)
    } 
    else if (e.key === 'ArrowUp' || e.key === 'Up') {
        moveVertical(avatar, -50)
    } 
    else if (e.key === 'ArrowRight' || e.key === 'Right') {
        moveHorizontal(avatar, 50)
        avatar.style.transform = 'scale(1, 1)'
    } 
    else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        moveHorizontal(avatar, -50)
        avatar.style.transform = 'scale(-1, 1)'
    }
    if (isTouching(avatar, coin)) moveCoin();
});

const moveVertical = (el, amount) => {
    const currTop = extractPos(el.style.top);
    el.style.top = `${currTop + amount}px`;
}

const moveHorizontal = (el, amount) => {
    const currLeft = extractPos(el.style.left);
    el.style.left = `${currLeft + amount}px`;
}

const extractPos = (pos) => {
    if (!pos) return 100;
    return parseInt(pos.slice(0, -2));
};

const moveCoin = () => {
    const y = Math.floor(Math.random() * window.innerHeight);
    const x = Math.floor(Math.random() * window.innerWidth);
    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
}
moveCoin();

// const btn = document.querySelector('button');
// const ranColor = ['orange', 'black', 'yellow', 'red', 'green'];
// btn.addEventListener('mouseover', function() {
//     const height = Math.floor(Math.random() * window.innerWidth);
//     const width = Math.floor(Math.random() * window.innerHeight);
//     const ranC = ranColor[Math.floor(Math.random() * ranColor.length)]

//     console.log(width, height);

//     btn.style.left = `${width}px`;
//     btn.style.top = `${height}px`;
//     btn.style.backgroundColor = ranC;
// });

// btn.addEventListener('click', function() {
//     btn.innerText = 'YOU GOT ME!';
//     document.body.style.backgroundColor = 'green';
// })
