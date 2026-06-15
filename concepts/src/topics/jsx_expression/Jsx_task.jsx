

const Jsx_task =()=>{
    let string="MERN NASA!"
    let age= 58                   
    let student= {              
        name:"Sundari",
        class:8
    }
    let isStudent=false
    
    
    let array=["shila","meela","geela","teela","peela","reela"]
    return(
        <div> Jsx_task
         
         <h1>Hello, {string}</h1>
         <h2>Age : {age}</h2>
        <div>
            {
                array.map((ele)=>{
                    return(
                        <h2>{ele}</h2>

                    )
                })
            }
        </div>


        <h2>{student.name}</h2>
        <h2>{student.class}</h2>
        


        <h2>{isStudent?"true":"false"}</h2>
        


        </div>
    )
}

export default Jsx_task