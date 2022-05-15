import {Appwrite} from 'appwrite'

const appwrite = new Appwrite()


appwrite
.setEndpoint('http://localhost/v1')
.setProject('628093c28546ff8903f8')

const api = {
    signup :async (mail , pass , name) =>{
        return new Promise((resolve , reject)=> {
            appwrite.account.create('unique()' , mail, pass, name)
            .then(response => {
                console.log(response);
                resolve(response)
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        }
        )
    },
    login : async(mail , pass)=>{
        return new Promise((resolve, reject) => 
            {
                appwrite.account.createSession(mail,pass)
                .then(response => {
                    console.log("Response From createSession ",response)
                    resolve(response)
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })

            }
        
        
        )
       
    },
    currentUser : ()=>{
        appwrite.account.get()
        .then(response => console.log("Current User : ",  response))
        .catch(er => console.log("Error :  " , er))
    },
    logout : () =>{
        appwrite.account.deleteSession('current').then(resp =>{
            console.log("Deleted : " , resp)
        }).catch(err=>{
            console.log("Error in DeleteSession : " ,err);
        })
    }
}

export default api