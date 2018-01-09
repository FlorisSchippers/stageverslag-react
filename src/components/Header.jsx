import React from 'react';
import Leerdoellist from '../glamorous/header/Leerdoellist.jsx';
import Leerdoelelement from '../glamorous/header/Leerdoelelement.jsx';
import Leerdoellink from '../glamorous/header/Leerdoellink.jsx';
import appVars from '../config/appVars';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let leerdoelen = ['Ontwikkelen', 'Onderzoeken', 'Ontwerpen', 'Ondernemen', 'Betrokken'];
        const header = leerdoelen.map((leerdoel) => {
            if (window.location.pathname.includes(leerdoel.toLowerCase())) {
                return (
                    <Leerdoelelement css={{background: appVars.theme.dark}}>
                        <Leerdoellink to={'/' + leerdoel.toLowerCase()}>{leerdoel}</Leerdoellink>
                    </Leerdoelelement>
                )
            } else {
                return (
                    <Leerdoelelement>
                        <Leerdoellink to={'/' + leerdoel.toLowerCase()}>{leerdoel}</Leerdoellink>
                    </Leerdoelelement>
                )
            }
        });

        return (
            <div>
                <Leerdoellist>{header}</Leerdoellist>
            </div>
        );
    }
}

export default Header;