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
    currentUser : async ()=>{
        return new Promise( (resolve ,  reject) => {
            appwrite.account.get()
            .then(response => resolve(response))
            .catch(er => reject (er))
            
        })
    },
    logout : async () =>{
        return new Promise((resolve , reject)=> {
            appwrite.account.deleteSession('current').then(resp =>{
                resolve(resp)
            }).catch(err=>{
                reject(err)
            })

        })
    }
}

export default api