

const Jsx_rules=()=>{
    let username=  "shyamkkkkkkkguy"
    let arr=['a','b','c','d']
    let theme=true;

   return(
    <div>
        {
            //jsx expression 
            //we can access the js but we cant create the js

            // rules: 
            // 1- we can't declare js varible but we can access it 
            // let remo ="hii"
            //2- we can't use conditional stmt like if, if-else, else-if,switch 
            //3- we cant use loop like for,while,do while,for -in,for-of  instead of these we can use "map
           //number string boolean array object

        }

        <h1>Hello {username}</h1>
        <button>{theme?"dark":"light"}</button>
        <ol>
            {
                arr.map((ele)=>{
                    return(
                        <li>{ele}</li>
                    )
                })
            }
        </ol>
    </div>
   )
}

export default Jsx_rules