import HttpService from '../HttpService';



export const ListService = (roles) =>{
    const http = new HttpService();
    let url = "roles";
    return http.getData(roles,url).then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {
        console.log(error)
        return error; 
         });
}

export const CreateService = (roles) =>{
    const http = new HttpService();
    let url = "roles";
    return http.postData(roles,url).then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {
        console.log(error)
        return error;
    });
}

export const UpdateService = (roles,id) =>{
    const http = new HttpService();
    let url = "roles/{id}";
    return http.put(roles,url).then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {
        console.log(error)
        return error;
    });
}

export const DeleteService = (roles,id) =>{
    const http = new HttpService();
    let url = "roles/{id}";
    return http.delete(roles,url).then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {
        console.log(error)
        return error;
    });
}


