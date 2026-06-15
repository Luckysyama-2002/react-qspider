//conditional rendeering 
// 1- ternary operator (condition ? true:false)
//2- short circuit logical AND (condition && true)
//3- nullish operator - (null || undefined ?? true)
//4- optional chaining (?)
//5- short circuit logical OR (variable = true || default value)


 const Conditional_Rendering =()=>{
     let status= null
     let data=[1,2,3,4]
        return(
        <div>
          {
            status = true ? <h1>😊happy</h1> : <h1>😒sad</h1>
          }
          {
            status && <h1>hello</h1>
          }
          {
            status ?? <h1>byee</h1>
          }
          <h1>
            {
                data.map(()=>{
                    return(
                        <h1>hiii</h1>
                    )
                })
            }
          </h1>
        </div>
    )
 }

 export default Conditional_Rendering