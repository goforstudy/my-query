// jquery(".test").addClass('red').addClass('bold');
// console.log(jquery(".test").find(".child"))
let test = jquery(".test");
test.addClass("red");
test.find(".child").addClass("gray").end().addClass("back");
test.addClass("white");