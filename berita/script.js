document.getElementById('submit').addEventListener('click', function() {
    var nameInput = document.getElementById('name');
    var messageInput = document.getElementById('message');
    
    var name = nameInput.value;
    var message = messageInput.value;
    
    if (name && message) {
        var comment = document.createElement('div');
        comment.innerHTML = '<strong>' + name + '</strong>: ' + message;
        document.getElementById('comment-list').appendChild(comment);
        
        nameInput.value = '';
        messageInput.value = '';
    }
});