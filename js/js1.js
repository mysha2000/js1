const d = new Date();
document.getElementById("date").innerHTML = d;

let day = d.getDay();
//let day = 0;
document.getElementById("day").innerHTML = day;

const pics = ["https://i.pinimg.com/originals/17/ae/60/17ae608a4ed26438a65e702f2300b54b.gif", "https://media.tenor.com/_Eb8XAfoZHYAAAAC/tuesday-day-of-the-week.gif", "https://www.icegif.com/wp-content/uploads/2022/10/icegif-691.gif", "https://www.gifcen.com/wp-content/uploads/2022/03/happy-thursday-gif-9.gif", "https://media.tenor.com/UUL8eVL0YeMAAAAC/friday.gif", "https://media2.giphy.com/media/c1tuIXDnIswjLOhrn3/giphy.gif?cid=6c09b9522fef88931541fdd2bc6c01a7a3443fe98a41231c&rid=giphy.gif&ct=s", "https://media.tenor.com/KzIBdEBzxYsAAAAM/homework-sunday.gif"];
document.getElementById("calendar_image").innerHTML = '<img src="' + pics[day] +'">';



document.getElementById("day_test_button").addEventListener("click", myFunction);

function myFunction (){

	day++;
	console.log(day);
	document.getElementById("day").innerHTML = day;
	//document.getElementById("calendar_image").innerHTML = '<img src="' + pics[day] +'">';
	if(day >= 7){

		day = -1;


	}
	if(day == 0){
	document.getElementById("calendar_image").innerHTML = '<img src="' + pics[0] +'">';
}
else if(day == 1){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[1] +'">';
}
else if(day == 2){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[2] +'">';
}
else if(day == 3){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[3] +'">';
}
else if(day == 4){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[4] +'">';
}
else if(day == 5){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[5] +'">';
}
else if(day == 6){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[6] +'">';
}
}
