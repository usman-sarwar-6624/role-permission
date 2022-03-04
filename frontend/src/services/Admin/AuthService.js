import HttpService from '../HttpService';



export const SignUpService = (credentials) =>{
    const http = new HttpService();
    let signUpUrl = "register";
    return http.postData(credentials,signUpUrl).then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {
        console.log(error)
        return error; 
         });
}

export const LoginAdmin = (credentials) =>{
    const http = new HttpService();
    let signUpUrl = "login";
    return http.postData(credentials,signUpUrl).then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {
        console.log(error)
        return error; 
    });
}

export const LogoutAdmin = () =>{
    const http = new HttpService();
    let logoutUrl = "logout";
    const tokenId = "admin-token";
    return http.getData(logoutUrl,tokenId).then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {
        console.log(error)
        return error; 
    });
}