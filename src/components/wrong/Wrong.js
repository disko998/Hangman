import React, { Component } from 'react'
import './wrong.css'
export default class Wrong extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const arrWord = this.props.word.split('')

        return (
            <div class='wrong'>
                Wrong:
                {this.props.userInputs.map(letter =>
                    this.props.word.indexOf(letter) == -1 ? `${letter},` : null,
                )}
            </div>
        )
    }
}
