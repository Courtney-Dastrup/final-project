$('#submit').on('click', function(){
    let displayName = $('#displayName').val();
    let comment = $('#comment').val();
    if (displayName === '') {
        console.log("anonymous");
    } else if (comment === '') {
        console.log('no comment');
    } else {
        $('#commentSection').prepend(`
            <div class="commentContainer">
                <div class="comment">
                    <div class="buttons">
                        <input type="submit" class="edit" value="Edit">
                        <input type="submit" class="delete" value="Delete">
                    </div>
                    <img src="user-icon.png" alt="Profile Icon" class="profileIcon" width="75" height="75">
                    <div class="username"><span>${$('#displayName').val()}</span></div>
                    <div class="words">
                        <h2>${$('#comment').val()}</h2>
                    </div>
                    <div class="noDisplay", id="editAction">
                        <input type="text" id="commentEdit" placeholder="Comment">
                        <input type="submit" class="submit">
                    </div>
                </div>
            </div>`);
    }
    $('#displayName').val("");
    $('#comment').val("");
});

$('#commentSection').on('click', '.delete', function() {
    let parent = $(this).parents()[2];
    $(parent).toggleClass('noDisplay');
});

$('#commentSection').on('click', '.edit', function() {
    let parent = $(this).parents()[1];
    let child = $(parent).children()[4];
    $(child).toggleClass('noDisplay');
});

$('#commentSection').on('click', '.submit', function() {
    let parent = $(this).parents()[1];
    let child = $(parent).children()[3];
    let parentToggle = $(this).parents()[0];
    let newComment = $(this).prev();
    let newCommentVal = $(newComment).val();

    if (newCommentVal === '') {
        console.log("Ya didn't even edit it!")
    } else {
    $(child).empty();
    $(child).append(`
        <h2>${$(newComment).val()}</h2>`);
    $(newComment).val('')
    $(parentToggle).toggleClass('noDisplay');
    };
});

