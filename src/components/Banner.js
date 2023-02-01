function Header() {
    return (
        <h1>La maison jungle</h1>
    )
}
function Description() {
    const text = "Ici achetez toutes les plantes dont vous avez toujours rêvées"
    return (<p>{ text}</p>)
}
function Banner() {
    return (<header>
        <Header />
        <Description />
    </header>)
}

export default Banner