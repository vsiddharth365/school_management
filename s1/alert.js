function login() {
	try{
	alert("Welcome student!");
	}
	catch(err){
	alert(err.message);
	location.href = 's1login.html';
	}
}
function register() {
	try{
	alert("Registration successful ! Your credentials have been received.");
	}
	catch(err){
	alert(err.message);
	location.href = 's1register.html';
	}
}
function message() {
	try{
	alert("Message sent !");
	}
	catch(err){
	alert(err.message);
	}
}
function pay() {
	try{
	alert("Proceed to pay?");
	}
	catch(err){
	alert(err.message);
	}
}
function issue() {
	try{
	alert("Send issue request ?");
	alert("Request sent.");
	}
	catch(err){
	alert(err.message);
	}
}
function ret() {
	try{
	alert("Return book ?");
	alert("Book returned.");
	}
	catch(err){
	alert(err.message);
	}
}