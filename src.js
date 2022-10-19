function Draw()
{
    var canv = document.getElementById("canv");
    var ctx = canv.getContext("2d");    
    ctx.lineWidth=8;
    canv.addEventListener("mousedown", function(event){ctx.moveTo(event.offsetX, event.offsetY);})
    canv.addEventListener("mouseup", function(event){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    })
}