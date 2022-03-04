import React, {useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useStyles} from '../../../styles'
import Card from '@material-ui/core/Card'
import { Link } from 'react-router-dom';
import {useFormFields} from '../../../helpers/hooksFormInput'
import {useDispatch, useSelector} from 'react-redux';
import {AdminLoginAction,clearAdminAuthState} from '../../../store/actions/Menui/MenuActions'
import {displayErrorMessages} from '../../../helpers/displayErr'


export default function EditView(props) {


  const [fields, handleFieldChange] = useFormFields({
    title: "", routeName: "",
  });

  const classes = useStyles();

  const dispatch = useDispatch();

  const authResponse = useSelector(state => state.adminAuth.authResponse);





    const MenuEdit = (e) =>
  {
    e.preventDefault();

      clearMenuErrDiv();
    
   dispatch(UpdateAction(fields,props.props))
  } 

  const clearMenuErrDiv = () =>
  {
    let roleErr = document.querySelector("#menuErr");
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
          
          <h2><b>Menu Role</b></h2>


          <div id="menuErr"></div>


  
            <form   onSubmit={menuEdit}>

           
           

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
                    <TextField
                        type="text"
                        className={classes.fullWidth}
                        required
                        margin="normal"
                        variant="outlined"
                        label="Route Name"
                        id="route_name"
                        value = {fields.routeName}
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
        <b>Save</b>
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
