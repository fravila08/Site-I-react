function NavBar({items}){
    const HandleNavBar= (item)=>{
        console.log(item.value)
    }
    return(
        <div>
            {items.map((item)=> (
                <a href="#" key={item.label} onClick={()=>HandleNavBar(item)}>{item.label}</a>
            ))
            }
        </div>
    )
}

export default NavBar