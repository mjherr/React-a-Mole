import { useEffect } from "react";
import moleHill from '../src/molehill.png'

function EmptySlot(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleHill}
            onClick={props.handleClick} />
        </div>
    )
}

export default EmptySlot