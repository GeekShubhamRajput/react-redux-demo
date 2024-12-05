import { buyIceCream } from "../redux"
import { connect } from "react-redux"

function IceCreamContainer(props){
  return(
    <div>
      <h1>Number of Ice Creams - {props.numOfIceCreams}</h1>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { numOfIceCreams: state.iceCream.numOfIceCreams }
}

const mapDispatchToProps = (dispatch) => {
  return { buyIceCream: () => dispatch(buyIceCream()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
