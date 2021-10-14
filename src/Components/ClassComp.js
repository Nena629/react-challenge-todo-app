import React, { Component } from 'react'

export default class ClassComp extends Component {

    constructor() {
        super()
        this.state = {
            compteur: 0
        }
        console.log("construction du composant")
    }
    componentDidMount() {
        console.log('component did mount for sure yay');
    }
    componentDidUpdate() {
        console.log(" we did an update ")
    }

    render() {
        return (
            <p>
                {this.state.compteur}
                <br />
                Bonjour Je suis une Méchante Composante 😈 !!
                <button onClick={() => this.setState({ compteur: this.state.compteur + 1 })}> ADD</button>
            </p>
        )
    }

    componentWillUnmount() {
        console.log("nooo heelp 😭")
    }
}