import {LoginAdmin,SignUpService,LogoutAdmin} from '../../../../services/Role/RoleService'







export const ListAction = (role) =>{
    return (dispatch)=>{
        
        dispatch({type:'LOADING'});

        ListService(role).then((res)=>{
            
            if(res.hasOwnProperty('success') && res.success==true){

                dispatch({type:'ROLE_SUCCESS',res});
                
            }else if(res.hasOwnProperty('success') && res.success==false) { 
                dispatch({type:'ROLE_ERROR',res})
            }
        },
        error=>{
            dispatch({type:'CODE_ERROR',error});
        }
        )
    }
    
}
export const CreateAction = (role) =>{
    return (dispatch)=>{

        dispatch({type:'LOADING'});

        CreateService(role).then((res)=>{

                if(res.hasOwnProperty('success') && res.success==true){

                    dispatch({type:'ROLE_SUCCESS',res});

                }else if(res.hasOwnProperty('success') && res.success==false) {
                    dispatch({type:'ROLE_ERROR',res})
                }
            },
            error=>{
                dispatch({type:'CODE_ERROR',error});
            }
        )
    }

}

export const UpdateAction = (role) =>{
    return (dispatch)=>{

        dispatch({type:'LOADING'});

        UpdateService(role).then((res)=>{

                if(res.hasOwnProperty('success') && res.success==true){

                    dispatch({type:'ROLE_SUCCESS',res});

                }else if(res.hasOwnProperty('success') && res.success==false) {
                    dispatch({type:'ROLE_ERROR',res})
                }
            },
            error=>{
                dispatch({type:'CODE_ERROR',error});
            }
        )
    }

}

export const DeleteAction = (role) =>{
    return (dispatch)=>{

        dispatch({type:'LOADING'});

        DeleteService(role).then((res)=>{

                if(res.hasOwnProperty('success') && res.success==true){

                    dispatch({type:'ROLE_SUCCESS',res});

                }else if(res.hasOwnProperty('success') && res.success==false) {
                    dispatch({type:'ROLE_ERROR',res})
                }
            },
            error=>{
                dispatch({type:'CODE_ERROR',error});
            }
        )
    }

}



