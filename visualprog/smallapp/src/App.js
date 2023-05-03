import React from 'react';
import {useState} from 'react';
// import axios from "axios";

function RegForm(){


          const [firstname,setFirstname]=useState('');
          const [secondname,setSecondname]=useState('');
          const [email,setEmail]=useState('');
          const [password,setPassword]=useState('');


            function handleSubmit(e){
                e.preventDefault();
                console.log('First Name:',firstname);
                console.log('Second name:',secondname);
                console.log('email:',email);
                console.log('password:',password);

                const formData = { firstname,secondname, email, password };

                const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(formData)
                };
                
                fetch('http://localhost:8080/api', requestOptions)
                  .then(response => response.json())
                  .then(data => console.log(data))
                  .catch(error => console.error(error));
                
            }

            return (
                  <form onSubmit={handleSubmit}>
                  <div>
                    <label> First Name</label>
                    <input type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)}></input>
                  </div>


                  <div>
                    <label>Second Name</label>
                    <input type="text" value={secondname} onChange={(e)=>setSecondname(e.target.value)}>
                    </input>
                  </div>

                  <div>
                    <label>
                      email
                    </label>

                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                  </div>


                  <div>
                    <label>password:</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                  </div>


                  <button type="submit">Submit</button>


                  </form>

            )

}


function App(){
          return(
                <div> 
                    <RegForm/>

                </div>


          )

}


export default App;