function whiteFunction () {
    //change Bg yellow by background image code
    let bannerImg=document.querySelectorAll(".bannerImg");
    for (i=0 ; i<bannerImg.length;i++){ 
        bannerImg[i].classList.toggle("whiteBGimg");
        bannerImg[i].classList.toggle("darkBGimg");
    }

    let colorWhiteTheme=document.querySelectorAll(".colorWhiteTheme");
    for (i=0 ; i<colorWhiteTheme.length;i++){
        colorWhiteTheme[i].classList.toggle("text-light");
        colorWhiteTheme[i].classList.toggle("text-dark");
    }
    document.getElementById("plus").classList.toggle("btn-dark")
    //Change body background
    document.querySelector("body").classList.toggle("whiteThemeBody");
    document.querySelector("body").classList.toggle("darkThemeBody");
    

    document.getElementById("toggleOn").classList.toggle("d-none");
    document.getElementById("toggleOff").classList.toggle("d-none");
    document.getElementById("toggleOn2").classList.toggle("d-none");
    document.getElementById("toggleOff2").classList.toggle("d-none");
    
   
    var x = element.getElementById("imgCardPortfolio");
    var v = x.getAttribute("src");
    if(v == "./images/portfolioWhite.png")
       { v ="./images/portfolio.png";}
    else
        {v = "./images/portfolioWhite.png";}
    x.setAttribute("src", v);	
}