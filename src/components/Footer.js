function Footer(){
    return (
        <div className="footer container">
            <div>
                <a href="/" className="title mr-1">Webclues</a>
                <span>&copy; {new Date().getFullYear()}</span>
            </div>
            
        </div>
    )
}

export default Footer