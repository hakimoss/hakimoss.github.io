

document.onmousemove = suitsouris;

function suitsouris()
{
    if(navigator.appName == "Microsoft Internet Explorer")
    {
        var x = event.x+document.body.scrollLeft;

    }
    else
    {
        var x = event.pageX;
        
    }
    document.getElementById("raquette").style.left = (x+1)+'px';
    
}

 