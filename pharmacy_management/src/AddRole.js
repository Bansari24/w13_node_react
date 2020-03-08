import React from 'react';
import styles from './AddRole.css'


class AddRole extends React.Component
{

    render()
    {
        return(
            <form className={styles.form}>
                <table>
                    <tr>
                        <h1>Add Role</h1>
                    </tr>
                    <br></br>
                    <tr> 
                        
                        
                        <label for="Role">Role</label>
                        <input type="text" id="Rname" name="Rname"></input><br/><br/>
                        
                    </tr>
                  <button type="submit">Add</button>
                  <button type="submit">Cancel</button>
                </table>
            </form>
        )
    }
}
export default AddRole;