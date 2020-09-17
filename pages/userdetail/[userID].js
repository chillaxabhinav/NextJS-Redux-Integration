import React,{useState, useEffect} from 'react';
import {fetchUserDetails, setUserDetailsUsersPage} from '../../redux';
import {useDispatch, useSelector} from 'react-redux';



const UserDetail = (props) => {

    const dispatch = useDispatch();

    const userDetails = useSelector(state => state.userDetailsReducer);
    
    useEffect(() => {   
        dispatch(fetchUserDetails(props.userID));
        dispatch(setUserDetailsUsersPage(props.activePage));
    },[]);


    return (
        <>
            <div>
                ID - {userDetails.userDetail.id}
            </div>
            <div>
                Title - {userDetails.userDetail.title}
            </div>
            <div>
                Body - {userDetails.userDetail.body}
            </div>
        </>
    )

}

UserDetail.getInitialProps = (ctx) => {
    return {
        userID : ctx.query.userID,
        activePage : ctx.query.activePage
    }
}

export default UserDetail;