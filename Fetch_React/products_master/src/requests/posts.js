export const getPosts = (callback) => {
    fetch('https://dummyjson.com/posts')
        .then(resp => resp.json())
        .then(json => callback(json.posts))
}