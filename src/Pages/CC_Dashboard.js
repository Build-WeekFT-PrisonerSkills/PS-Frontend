// career coach dashboard here:
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {EmployeeListPage} from '../Pages/EmployeeListPage';
import {NavBarOther} from '../Components/NavBarOther';
import axios from 'axios';
import {deletePrison, editPrison, getPrisons} from '../Actions/authAction';

const CC_Dashboard = (props) => {
    // const [prisonsHook, setPrisonsHook] = useState([]);
    //console.log("props", props.prisons)
    // setPrisonsHook(props.prisons);
    useEffect(() => {
        // axios
        //     .get(`https://prisoner-skills-bw.herokuapp.com/api/users/`)
        //     .then(res => {
            // dispatch({ type: GET_PRISONS_SUCCESS, payload: res.data})
            //     setPrisonsHook(res.data)
            // })
            // .catch(err => console.log(err))
        props.getPrisons();
        //console.log("line 15",props.prisons)
    },[])  
    // deleteSinglePrison = (prisonId) => {
    //     props.deletePrison(prisonId)
    //     setPrisonsHook()
    // }
    return(
        <>
           <NavBarOther/>
            <h1 style={{textAlign: 'center'}}>Career Coach Dashboard</h1>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {/* {console.log(prisons)} */}
                {props.prisons.map( prison => 
                <>
                    <div style={{
                            boxShadow: '0px 5px 10px #ccc', 
                            width: '18rem', 
                            justifyContent: 'center', 
                            margin: '2rem', 
                            justifyContent: 'center',
                            padding: '20px' ,
                            borderRadius: '5px'}}>
                        <p>{prison.prisonName}</p>
                        <p>{prison.city}</p>
                        <p>{prison.phone}</p>
                        <button onClick={() => props.deletePrison(prison.id)}>Delete</button>
                        <button onClick={() => props.editPrison(prison.id, props)}>Edit</button>
                    </div>
                </>
                )}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        prison: state.prisonReducer.prison,
        prisons: state.prisonReducer.prisons,
    }
}

export default connect(
    mapStateToProps,
    {editPrison, getPrisons, deletePrison})(CC_Dashboard);
