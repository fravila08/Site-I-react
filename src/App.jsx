import { useState } from 'react'
import NavBar from './components/navbar'
import Article from './components/article'
import ArticleTeaser from './components/articleteaser'
import ArticleGroup from './components/articleGroup'
import './App.css'
import News from '../data/news.json'
import NavItems from '../data/navItems.json'

import 'bootstrap/dist/css/bootstrap.min.css';

// let randomArtInd=Math.floor(Math.random() * News.length);
// let randArt=News[randomArtInd]
function App() {
  let [navItems, setNavItems]=useState(NavItems)
  // let [rarticle, setArticle]=useState({
  //   id:randomArtInd,
  //   title: randArt.title,
  //   abstract: randArt.abstract,
  //   byline: randArt.byline,
  //   image: randArt.multimedia.length ? randArt.multimedia[0] : null,
  //   created_date: randArt.created_date
  // })
  
  let[articles, setArticles]=useState(News.map((article, index)=>{
    return {
      id:index,
      title: article.title,
      abstract: article.abstract,
      byline: article.byline,
      image: article.multimedia.length ? article.multimedia[0] : null,
      created_date: article.created_date
    }
  }))
  // const renderIf=()=>{
  //   if (showArticle){
  //     return <Article {...article} />
  //   }
  // }

  return (
    <div className="App">
      <NavBar items= {navItems}/>
      {articles.map((article)=>(
          <ArticleGroup article={article} />
      ))}
    </div>  
  )
}

export default App
