var groups = [];

$(document).ready(function() {
  var currentGroup;
  $("form#task-groups").submit(function (event){
    event.preventDefault();
    var newGroup = $("#new-group").val();
    $('ul#task-group-list').append("<li>"+newGroup+"</li>");

    var taskGroup = {};
    taskGroup.name = newGroup;
    taskGroup.tasks = [];
    groups.push(taskGroup);
    currentGroup = taskGroup;

    $('ul#task-group-list li').last().click(function() {
      $("#task-list").text('');
      $('#group').text('');
      $('#group').append(taskGroup.name);
      taskGroup.tasks.forEach(function(stuff) {
        $("#task-list").append("<li>"+stuff+"</li>");
      });
      currentGroup = taskGroup;
    });
  });
  $('#knew-tasks').last().submit(function (event) {
    event.preventDefault();
    var task = $("#new-task").val();
    currentGroup.tasks.push(task);
    console.log(currentGroup);
    $("#new-group").val('');
    $("#new-task").val('');
  });
});
