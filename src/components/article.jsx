function Article(props){
    return (
        <div>
            {props.image ? <img src={props.image.url} /> : <p>Image Unavailable</p>}
        </div>
    )
}

export default Article