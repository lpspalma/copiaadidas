// JavaScript Document
$(document).ready(function(){
	setTimeout("entrada()",5000)
	
})
function entrada(){
	$(".banner").fadeIn(2000)
	setTimeout("saida()",10000)

}

function saida(){
	$(".banner").fadeOut(300)
}