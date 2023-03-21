import React, { Component } from 'react'
import General from './components/General';
import Education from './components/Education'

class App extends Component {

    render() {
        return (
            <div>
                <p>CV</p>
                <General />
                <Education />
            </div>
        )
    }
}

export default App;
