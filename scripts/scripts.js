$(document).ready(function() {
  $("form#new-item").submit(function(event) {
    event.preventDefault();

    var taskInputted = $("input#task-input").val();
    var priority = $("input#important-task:checked").length === 1 ? true : false;
    var newTask = {description: taskInputted, important: priority};

    if (newTask.important) {
      $("ul#tasks").prepend("<li><span class='priority-task'>" + newTask.description + "</span></li>");
    } else {
      $("ul#tasks").append("<li><span class='task'>" + newTask.description + "</span></li>");
    }

    $(".task,.priority-task").last().click(function() {
      $(this).toggleClass("complete");
    });



    $("input#task-input").val("");
    $("input#important-task").prop("checked", false);



  });
});

