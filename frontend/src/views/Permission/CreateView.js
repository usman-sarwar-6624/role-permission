import React, {useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useStyles} from '../../../styles'
import Card from '@material-ui/core/Card'
import { Link } from 'react-router-dom';
import {useFormFields} from '../../../helpers/hooksFormInput'
import {useDispatch, useSelector} from 'react-redux';
import {AdminLoginAction,clearAdminAuthState} from '../../../store/actions/Permission/PermissionActions'
import {displayErrorMessages} from '../../../helpers/displayErr'


export default function CreateView(props) {


  const [fields, handleFieldChange] = useFormFields({
    title: "",
  });

  const classes = useStyles();

  const dispatch = useDispatch();

  const authResponse = useSelector(state => state.adminAuth.authResponse);





    const PermissionCreate = (e) =>
  {
    e.preventDefault();

      clearPermissionErrDiv();
    
   dispatch(CreateAction(fields,props.props))
  } 

  const clearPermissionErrDiv = () =>
  {
    let roleErr = document.querySelector("#perErr");
      roleErr.innerHTML = "";
  }

  const successMessage = (successMessage) =>
  {
  return     <div dangerouslySetInnerHTML=
   {{ __html: '<div class="alert alert-success add-padding">'+' '+successMessage+'</div>' }} 
   /> 
  }

    return (
        <div>
       
       <div className={classes.centerItem}>

       <Card>
          
          <h2><b>Create Permission</b></h2>


          <div id="perErr"></div>


  
            <form   onSubmit={PermissionCreate}>

           
           

           <div>
           <TextField
          type="text"
          className={classes.fullWidth}
          required
          margin="normal"
          variant="outlined"
          label="Title"
          id="title"
          value = {fields.title}
          onChange = {handleFieldChange}
        />
           </div>


          <div>



              <div>
              <Button type="submit" className={classes.fullWidth}
             
        variant="contained"
        color="primary"
     endIcon={<AccountCircleIcon/>}
      >
        <b>Create</b>
      </Button><br/>


          
              </div>
            
            
             
            <div>
                
            </div>


           </div>  
        
      

            </form>

            </Card>
     
            </div>
        
        </div>
    )
}
