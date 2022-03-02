 function showBtn()
		{
        var livLogo = document.getElementsByTagName("img")[0];
        var currentStatus = livLogo.style.visibility;
        console.log(currentStatus)
        if (currentStatus != "hidden")
            livLogo.style.visibility = "hidden" 
        else
            livLogo.style.visibility = "visible";
		};