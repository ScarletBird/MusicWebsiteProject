import React from 'react';

class API_SC extends React.Component {
    /*constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    */

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://connect.soundcloud.com/sdk/sdk-3.3.2.js";
        script.async = true;

        document.body.appendChild(script);
        fetch('https://soundcloud.com/rats-infestationofficial/rats-pomaro-12/s-geCch')
        .then(response => console.log('response', response));
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default API_SC;