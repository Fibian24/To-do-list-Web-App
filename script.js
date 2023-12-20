$(document).ready(function() {
    $('#addButton').on('click', function() {
    addTask();
    });

    $('#taskInput').on('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
    });

    $('#taskList').on('click', '.deleteButton', function() {
    $(this).parent().remove();
    });

    function addTask() {
    var task = $('#taskInput').val();

    if (task.trim() !== '') {
        $('#taskList').append('<li>' +'<span id= "task">' + task +'</span>' + ' <button class="deleteButton">Delete</button></li>');

        $('#taskInput').val('');
    } else {
        alert('Please enter a task before adding!');
    }
    }
});
