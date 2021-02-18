document.onmousemove = suitsouris;

function suitsouris()
{
    if(navigator.appName == "Microsoft Internet Explorer")
    {
        var x = event.x+document.body.scrollLeft;
        var y = event.y+document.body.scrollTop;
    }
    else
    {
        var x = event.pageX;
        var y = event.pageY;
    }
    document.getElementById("raquette").style.left = (x+1)+'px';
    document.getElementById("raquette").style.top = (y+1)+'px';
}