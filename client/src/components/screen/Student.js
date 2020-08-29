import React,{ useState} from 'react'
import M from 'materialize-css'



const Student = () =>{
   
   const [name,setName]=useState("")
   const [address,setAddress]=useState("")
   const [email,setEmail]=useState("")
  
  
   const PostData= ()=>{
     
      fetch("/createstudent",{
         method:"post",
         headers:{
            "Content-Type":"application/json",
            
        },
        body:JSON.stringify({
            name,
            email,
            address
         })
      })
         .then(res=>res.json())
         .then(data=>{
            if(data.error){
               M.toast({html: data.error,classes:"#c62828 red darken-3"}) 
            }
            else{
               M.toast({html:data.message,classes:"#43a047 green darken-1"})
              
           }
        }).catch(err=>{
            console.log(err)
        })
   }
   return(
     
    <div className="mycard">
    <div className="card auth-card input-field">
       <h2>Create Student</h2>
       <input
       
       type='text'
       placeholder='name'
       value={name}
       onChange={(e)=> setName(e.target.value)}
       />
       <input
       
       type='text'
       placeholder='email'
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
       />

        <input
       type='text'
       placeholder='address'
       value={address}
       onChange={(e)=>setAddress(e.target.value)}
       />
       <button className='btn waves-effect waves-light #64b5f6 blue darken-1'
       onClick={()=>PostData()}
       >
           Create Student
           </button>
        
    </div>
</div>

   )

}

export default Student