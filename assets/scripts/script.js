
document.querySelector('.wrapper__body').style.setProperty("--custom-icon", 'url(../images/wallpaper/1w.png)');

function updateClock(){

	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
	  "Jul", "Aug", "Sep", "Now", "Oct", "Now"
	];

	const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	let today = new Date();

	let day = today.getDate();
	let month = monthNames[today.getMonth()];
	let dayName = dayNames[today.getDay()];
	let time = `${(today.getHours() < 10 ? '0' : '') + today.getHours()}:${(today.getMinutes() < 10 ? '0' : '') + today.getMinutes()}`;

	document.getElementById('day-0').innerHTML = day;
	document.getElementById('month-0').innerHTML = month;
	document.getElementById('date-0').innerHTML = dayName;
	document.getElementById('hour-0').innerHTML = time;

	setTimeout(updateClock, 1000);
}


document.getElementById('setting-app-0').addEventListener('click', function() {
	document.getElementById('setting-window-0').classList.toggle('body-wrapper__setting-window--close');
});


function pickTheWallpaper(elemId){

	let element = document.getElementById(elemId);
	document.querySelector('.wrapper__body').style.setProperty("--custom-icon", `url(${element.src})`);

	element.classList.add('block-img-content-setting-window-body-wrapper__item--selected');

	checkSelectedItem(elemId);

}

function setCustomAttribute(){
	const wallpaperItem = document.querySelectorAll('.block-img-content-setting-window-body-wrapper__item img');

	for (let i = 0; i < wallpaperItem.length; i++) {
		wallpaperItem[i].setAttribute('id', 'wallpaper-' + i);
		wallpaperItem[i].setAttribute('onclick', `pickTheWallpaper('${wallpaperItem[i].getAttribute('id')}')`);
	}
}


function checkSelectedItem(elemId){
	const wallpaperItem = document.querySelectorAll('.block-img-content-setting-window-body-wrapper__item img');
	for (let i = 0; i < wallpaperItem.length; i++) {

		if (wallpaperItem[i].getAttribute('id') != elemId) {
			wallpaperItem[i].classList.remove('block-img-content-setting-window-body-wrapper__item--selected');
		}
	}
}

setCustomAttribute();
updateClock();

