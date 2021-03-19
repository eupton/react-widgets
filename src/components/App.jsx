import React, { useState } from 'react'
import Accordion from './Accordion'
import Search from './Search'
import Dropdown from './Dropdown'

const App = () => {
    const items = [
        {
          title: 'What is React?',
          content: 'React is a front end javascript framework'
        },
        {
          title: 'Why use React?',
          content: 'React is a favorite JS library among engineers'
        },
        {
          title: 'How do you use React?',
          content: 'Use React by building components'
        }
      ]

      const options = [
        {
            label: 'The Color Red',
            value: 'red'
        },
        {
            label: 'The Color Blue',
            value: 'blue'
        },
        {
            label: 'The Color Green',
            value: 'green'
        }
      ]

    const [selected, setSelected] = useState(options[0]);

    return (
        <div className="ui container">
            <h1>Widgets App</h1>
            <Dropdown options={options} selected={selected} onSelectedChange={setSelected}/>
        </div>
    )
}

export default App;