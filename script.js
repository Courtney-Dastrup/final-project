$('#submit').on('click', function(){
    let displayName = $('#displayName').val();
    let comment = $('#comment').val();
    $('#commentSection').append(`
    <div class="commentContainer" class="disappear">
        <div class="comment">
            <div class="buttons">
                <input type="submit" id="edit" value="Edit">
                <input type="submit" id="delete" value="Delete">
            </div>
            <img src="user-icon.png" alt="Profile Icon" class="profileIcon" width="75" height="75">
            <div class="username"><span>displayName</span></div>
            <div class="words"><h2>comment</h2></div>
            <div class="editAction">
                <input type="text" class="comment" class="uncover" placeholder="Comment">
                <input type="submit" class="submit">
            </div>
        </div>
    </div>`);
});

