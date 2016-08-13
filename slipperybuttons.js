function changePosition(){
	var element=document.getElementById('btn-1');

	element.style.top=Math.round(Math.random() *500)+"px";
	element.style.left=Math.round(Math.random() *1000)+"px";
}