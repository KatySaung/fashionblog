import Nav from "./Nav";
import {useState} from 'react';


function Footer ( ) {
    const [  links, setLinks ] = useState(["Home","Womens","Men's","On the Street","The Catwalk","AdWatch","About"])
    return(

<div>
    <Nav links={links}/>
        <footer> &copy; 2013 Valet Industries, Inc</footer>
</div>
    )
}


export default Footer;