import { useState } from "react"
import Article from "./article"
import ArticleTeaser from "./articleteaser"


function ArticleGroup({article}){
    let[showArticle, setShowArticle]=useState(false)

    const HandleTitleClick = (article_id)=>{
        setShowArticle(!showArticle)
    }

    return (<div>
        <ArticleTeaser handleClick={HandleTitleClick} id={article.id} title={article.title} date={article.created_date} />
        {showArticle && <Article {...article} />}
    </div>)
}
export default ArticleGroup