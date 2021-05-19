$(".gryffindorImage").hide();
$(".hufflepuffImage").hide();
$(".ravenclawImage").hide();
$(".slytherinImage").hide();
$(".muggleImage").hide();

let number = 0;
$(".findOutButton").click(function() {
    let color = $("input").val();
    let description = $(".descriptionInput").val();
    if ((color === "red" || color === "Red") && (description === "brave" || description === "Brave")) {
        $(".result").append("<p> You are a Gryffindor! </p>");
        $(".hufflepuffImage").hide();
        $(".ravenclawImage").hide();
        $(".slytherinImage").hide();
        $(".muggleImage").hide();
        $(".gryffindorImage").show();
    } else if ((color === "yellow" || color === "Yellow") && (description === "nice" || description === "Nice")) {
        $(".result").append("<p> You are a Hufflepuff! </p>");
        $(".gryffindorImage").hide();
        $(".ravenclawImage").hide();
        $(".slytherinImage").hide();
        $(".muggleImage").hide();
        $(".hufflepuffImage").show();
    } else if ((color === "blue" || color === "Blue") && (description === "smart" || description === "Smart")) {
        $(".result").append("<p> You are a Ravenclaw! </p>");
        $(".gryffindorImage").hide();
        $(".hufflepuffImage").hide();
        $(".slytherinImage").hide();
        $(".muggleImage").hide();
        $(".ravenclawImage").show();
    } else if ((color === "green" || color === "Green") && (description === "ambitious" || description === "Ambitious")) {
        $(".result").append("<p> You are a Slytherin! </p>");
        $(".gryffindorImage").hide();
        $(".hufflepuffImage").hide();
        $(".ravenclawImage").hide();
        $(".muggleImage").hide();
        $(".slytherinImage").show();
    } else {
        $(".result").append("<p> You are a Muggle! </p>");
        $(".gryffindorImage").hide();
        $(".hufflepuffImage").hide();
        $(".ravenclawImage").hide();
        $(".slytherinImage").hide();
        $(".muggleImage").show();
    }
    $(".result").append("You like the color " + color + ", and you are " + description + `.\n`);
    number = number + 1;
    $(".counter").text("This quiz has been taken " + number + " times.");
});