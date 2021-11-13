var last_position_x, last_position_y;

canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "Pink";
    width_of_line = 5;
    var width = screen.width;
    var new_width = screen.width - 70
    var new_width = screen.width - 300
    if(width < 992){
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart" , my_touchstart);
    function my_touchstart(e)
    {
        console.log("My_Touchstart");
        color = document.getElementById("color").ariaValueMax;
        width_of_line = document.getElementById("Width_of_line").ariaValueMax;

        last_position_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_y = e.touches[0].clientY - canvas.offsetTop;
    }
    canvas.addEventListener("touchmove",my_touchmove);
    function my_touchmove(e)
    {
        console.log("My_Touchmove")
        current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginpath();
        ctx.strokestyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y cordiantes = ");
        console.log("x =" + last_position_x + "y =" + current_position_of_mouse_x);
        ctx.moveTo(last_position_x, last_position_y);

        console.log("Current position of x and y cordiantes = ");
        console.log("x =" + current_position_x + "y =" + current_position_of_mouse_x);
        ctx.moveTo(current_position_x, current_position_y);
        ctx.stroke();

        last_position_of_x = current_position_of_mouse_x;
        last_position_of_y = current_position_of_mouse_y;
    }
    function Clear_drawing() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }