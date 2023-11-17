function multiply() {
	let number = document.getElementById('multi').value;
	let count = document.getElementById('count').value;
	let data = document.getElementById('hi');
	let mtable = "";
	if(count<=12)
	{
		mtable +="<table>";
		for(var i=1;i<=count;i++)
		{
			var a;
			a=number*i;
			mtable +="<tr><td>"+ number + " * " + i + " = " + a +"</td></tr>";
		}
		mtable +="</table>";
	}
	else
	{
		alert("Count should be <= 12");
		mtable = "Multiplication Table";
	}
	data.innerHTML = mtable;
}