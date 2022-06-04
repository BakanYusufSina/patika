let posts = [{ author: 'Zeynep', post: 'denemePost' }]

const addPost = ({ post, author }, callback) => {
    posts.push({ author, post })
    callback()
}

const getPosts = () => {
    try {
        if (posts.length > 0)
            posts.map((el, i) => {
                console.log(i + 1, " author :", el.author, " post:", el.post)
            })
        else
            console.log('Post bulunamadı')
    }

    catch {
        console.log('Bir hata oluştu!!!')
    }



}
getPosts()
addPost({ author: 'Yusuf', post: 'deneme' }, getPosts)
