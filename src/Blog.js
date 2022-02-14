import React, { useEffect, useState } from 'react'
import db from './Firebase'
import { collection,getDocs,addDoc,query} from "firebase/firestore";
import {getDatabase,ref,orderByChild } from "firebase/database";
import Post from './Post'
import './blog.css'

function Blog() {

    const [post,setPost] = useState('')
    const [posts,setPosts] = useState([])
    const [author,setAuthor] = useState('')
    

    const filterPost = (event) => {
        event.preventDefault()
        const db = getDatabase();
        const sortAuthor = query(ref(db, 'posts'), orderByChild('author'));
        console.log(sortAuthor)
    }

    const sendPost = (event) => {
        event.preventDefault()
        const ref = collection(db,'posts')
        addDoc(ref,{
            author : author,
            post : post
        })
        .then(() => {
            setAuthor('')
            setPost('')            
        })
    }

    useEffect(() => {
            const ref = collection(db,'posts')
            getDocs(ref).then((snapshot) => {
                let blogs = []
                snapshot.docs.map((doc) => (
                    blogs.push({...doc.data()})
                    ))
                setPosts(blogs)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [posts])
        
    return (
        <div className='blog'>
            <h1>Welcome to blog</h1>
            <form action = '.'>
                <input type='text' value={author} onChange = {event => setAuthor(event.target.value)} placeholder = 'enter author name'/><br></br>
                <textarea rows = '10' cols = '80' value = {post} onChange = {event => setPost(event.target.value)} placeholder = 'author blog'/><br></br>
                <button className='submit_button' type= "submit" onClick={sendPost}>Submit post</button>
            </form>
            <div className='blog_posts'>
                <table className='blog_posts_table'>
                    <tr>
                        <th>Author</th>
                        <th>Blog</th>
                    </tr>
                    {
                    posts.map(post => (
                        <Post author = {post.author} post = {post.post}/>
                    ))
                }
                </table>
            </div>
            <div>
                <button className='submit_button' onClick = {filterPost}>Filter by author</button>
            </div>
        </div>
    )
}

export default Blog