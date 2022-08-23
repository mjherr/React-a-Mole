import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'


function MoleContainer(props) {
    let [moles, setMoles] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score +1)
        setMoles(false)
    }

    let displayMole = moles ? 
    <Mole setScore={props.setScore} 
    toggle={setMoles}
    handleClick={handleClick} /> 

    :<EmptySlot toggle={setMoles} />


    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer