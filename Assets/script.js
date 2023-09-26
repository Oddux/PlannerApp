var today = dayjs();
$("#currentDay").text(today.format('dddd MMM D, YYYY'))

var currentHour = parseInt(dayjs().format('HH'))
  console.log(currentHour)

function pullFromLocal() {
  $(".time-block").each(function(){
    var blockId = $(this).attr("id")
    $(this).children(".description").val( localStorage.getItem(blockId));
  })}

$(".time-block").each(function(){
  var blockHour = parseInt($(this).attr("data-hour"))
  if (blockHour > currentHour){
    $(this).addClass("future")
  }else if(blockHour < currentHour){
    $(this).addClass("past")
  }else if(blockHour == currentHour){
    $(this).addClass("present")
  }
})

$(".btn").each(function(){
  $(this).on("click", function(){
    var textToSave = $(this).siblings(".description").val()
    var hourToSave = $(this).parent().attr("id")
    localStorage.setItem(hourToSave, textToSave)
  })
})

pullFromLocal()