import { useEffect } from "react";
import moleImg from '../src/mole.png'

function Mole(props) {
    useEffect(() => {
        //adjust numbers as wanted
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleImg}
            onClick={props.handleClick} />
        </div>
    )
}

export default Mole