import { useSelector } from "react-redux"

function HooksCakeContainer(props){
  const numOfCakes = useSelector(state => state.numOfCakes)

  return(
    <div>
      <h1>Number of Cakes - {numOfCakes}</h1>
      <button>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
