// career coach dashboard here:
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {EmployeeListPage} from '../Pages/EmployeeListPage';

const CC_Dashboard = (props) => {
    const [state, setState] = useState({
        
    })
    return(
        <>
        <h1>Career Coach Dashboard</h1>
        <div>
            <Link to='/prisonProfile'><button>view prison profile</button></Link>
            <Link to='/addEmployee'><button>add employee</button></Link>
        </div>
        <EmployeeListPage {...props}/>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        isLoading: state.isLoading,
        error: state.error,
    }
}

export default connect(
    mapStateToProps,
    {})(CC_Dashboard);
