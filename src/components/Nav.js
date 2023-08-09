function Nav( props) {
    return (
<div>
    <div class="topNav">
            <nav role="navigation" aria-label="Main Navigation">
                <ul>
                    {props.links.map( (link) => <li><a href="">{link}</a></li>
                    

                    )}

                </ul>
            </nav>
        </div>
    </div>
    )
}

export default Nav;