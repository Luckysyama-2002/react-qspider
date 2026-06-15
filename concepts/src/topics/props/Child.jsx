
const Child=(props)=>{
    const {name="default value"}=props
    return(
        <div>
          <h1>Hello {name.toUpperCase()}</h1>
        </div>
    )
}

export default Child 