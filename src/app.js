import 'bootstrap'
import React from 'react'
import NavView from '../src/navigation'
import CarouselsView from '../src/carousels'

class App extends React.Component {
    render() {
        return (
            <div>
                <NavView />
                <CarouselsView />
            </div>
        )
    }
}

export default App