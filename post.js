let posts = [{ author: 'Zeynep', post: 'denemePost' }]

const addPost = ({ post, author }, callback) => {
    posts.push({ author, post })
    callback()
}

const getPosts = () => {
    console.log(posts)
}
getPosts()
addPost({ author: 'Yusuf', post: 'deneme' }, getPosts)
