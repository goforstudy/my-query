// jquery(".test").addClass('red').addClass('bold');
// console.log(jquery(".test").find(".child"))
let test =new jquery(".test");
test.addClass("red");
test.find(".child").addClass("gray").end().addClass("back");
test.addClass("white");

test.each(
    (div) => {
        console.log(div)
    }
).find('.child').each(
    (div) => {
        console.log(div)
    }
)


let children =new jquery(".child");
children.parent().print()

test =new jquery(".test");
test.children().print()