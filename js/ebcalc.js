function ebcalc(unit)
{
	var amount=0;
	var m1=0,m2=2.5,m3=5,m4=8;
	if(unit<=100)
	{
		amount=m1;
	}
	else if(unit>100 && unit<=200)
	{
		let a=unit-100;
		amount=(100*m1)+(a*m2);
	}
	else if(unit>200 && unit<=400)
	{
		let a=unit-200;
		amount=(100*m1)+(100*m2)+(a*m3);
	}
	else if(unit>400 && unit<=600)
	{
		let a=unit-400;
		amount=(100*m1)+(100*m2)+(200*m3)+(a*m4);
	}
	document.getElementById("hi").innerHTML=amount;
}