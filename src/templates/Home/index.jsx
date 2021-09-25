import './styles.css';


import { Component } from 'react';
//import { PostCard } from './components/PostCard';
import {loadPosts} from '../../utils/load-posts'
import { Posts } from '../../components/posts/index';
import { Button } from '../../components/button';
import {TextInput} from '../../components/TextInput/index'


class Home extends Component{
    state = {
    posts: [],
    allPosts: [],
    page:0,
    postsPerPage: 3,
    searchValue: '',
   

    };
    
    async componentDidMount(){
      await this.loadPosts();
  
  }

  loadPosts = async() =>{
    const {page, postsPerPage} = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts:postsAndPhotos.slice(page, postsPerPage),
      allPosts:postsAndPhotos,
    });  
  }

  loadMorePosts = () =>{
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts)

    this.setState({posts, page:nextPage})

  }
  handleChange = (e) =>{
    const value = e.target.value;
    this.setState({searchValue: value})

  }
    

  render(){
    const {posts, page, postsPerPage, allPosts, searchValue} = this.state;
    const noMoreposts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue?
    allPosts.filter(post =>{
      return post.title.toLowerCase()
      .includes(searchValue.toLowerCase());
    }):posts;

      return (
    <section className='container'>
      <div className="search-container">
      {filteredPosts.length == 0 && (
          <h1>Search value: <span style ={{color:'red'}}>Titulo não encontrado</span> </h1>
        )}
      {filteredPosts.length > 0 && (
        !!searchValue &&(
          <h1>Search value: {searchValue}</h1> 
          )  
        )}
        <TextInput 
        searchValue ={searchValue}
        handleChange ={this.handleChange}
        />
      </div>
    {filteredPosts.length > 0 &&(
      <Posts posts = {filteredPosts}/>
    )}
    
    <div className = 'button-container'>
      {!searchValue &&(
                  <Button 
      text = "Load more posts"
      clicar = {this.loadMorePosts}
      desabilitado = {noMoreposts}
      />
      )}

    </div>
    </section>

  );
  }
}

export default Home;
