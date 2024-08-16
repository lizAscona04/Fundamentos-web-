function increaseLikes(postId) {
    const likesElement = document.querySelector(`#likes${postId}`);
    let likes = parseInt(likesElement.textContent);
    likes++;
    likesElement.textContent = likes;
}