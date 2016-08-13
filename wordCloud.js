var num=0;

function submit(){

	var storeWord = document.getElementById('text_field').value;
	if(storeWord.length==0){
		document.getElementById('displaytext').innerHTML="EMPTY IMPUT!?!?!?!? WHY?";
	}
	else{
		document.getElementById('displaytext').innerHTML="Imput? Imput?! IMPUUUUTTT!!!!!!!!!";

	var cloudWords = document.getElementsByClassName("cloud_word");

	var randNum = Math.floor(Math.random() * cloudWords.length);
	cloudWords[randNum].innerHTML=storeWord;

	document.getElementById("text_field").value="";

	num++;

	document.getElementById('displaytext').innerHTML=num+"Words Have Been Given!";
	}
}