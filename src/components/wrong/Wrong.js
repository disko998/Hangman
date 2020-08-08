import React, { Component } from 'react'
import './wrong.css'
import { getWrongLetters } from '../../util/helper'
export default class Wrong extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='wrong'>
                Wrong:
                {this.props.wrong.join(',')}
            </div>
        )
    }
}
