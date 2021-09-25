import {PostCard} from '../PostCard/index'
import './styles.css'
export const Posts = (props) =>{
    console.log(props)
    return(
          <div className="posts">
    {props.posts.map(post => (
        <PostCard
          key ={post.id}
          title={post.title}
          body ={post.body}
          id ={post.id}
          cover = {post.cover}
          />
      ))}
    </div>  
    )

}