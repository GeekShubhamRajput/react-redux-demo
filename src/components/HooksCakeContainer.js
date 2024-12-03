import { useSelector, useDispatch } from "react-redux"
import { buyCake } from "../redux"

function HooksCakeContainer(props){
  const numOfCakes = useSelector(state => state.numOfCakes)
  const dispatch = useDispatch()

  return(
    <div>
      <h1>Number of Cakes(Hooks) - {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
