import logo from '../assets/logo.png'

function Header() {
    return (
        <div>
            <img src={logo} alt="leaf logo" title="leaf logo"></img>
            <h1>La maison jungle</h1>
        </div>
    )
}
function Description() {
    const text = "Ici, achetez toutes les plantes dont vous avez toujours rêvées"
    return (<p>{ text}</p>)
}
function Banner() {
    return (<header>
        <Header />
        <Description />
    </header>)
}

export default Banner