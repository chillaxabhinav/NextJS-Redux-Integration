import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers, setActivePage} from '../redux';
import Pagination from 'react-js-pagination';
import {useRouter} from 'next/router';


const Users = () => {

    const dispatch = useDispatch();

    const router = useRouter();

    const myState = useSelector((state) => state.userReducer);

    useEffect(() => {
        dispatch(fetchUsers());
    },[]);

    const displayUsers = () => {
        if(myState.users) {
            return (
                <table>
                    <tr>
                        <th>
                            userID
                        </th>
                        <th>
                            Title
                        </th>
                    </tr>
                    {myState.users.map(user => {
                        return (
                            <tr key={user._id}>
                                <td>
                                    {user.userId}
                                </td>
                                <td onClick={() =>  router.push({pathname : `/userdetail/${user.userId}`,query : {activePage :  myState.activePage, userID : user.userId}})}
                                style={{cursor : 'pointer'}}
                                >
                                    {user.title}
                                </td>
                            </tr>
                        )
                    })}
                </table>
            )
        }
        else{
            return (
                <div>Loading...</div>
            )
        }
    }

    const handlePageChange = (pageNumber) => {
        dispatch(fetchUsers());
        dispatch(setActivePage(pageNumber));
    }



    return (
        <>
            <div>
                {displayUsers()}
            </div>
            <h2>Active Page - {myState.activePage}</h2>

            <Pagination 
                activePage={myState.activePage}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                onChange={(e) => handlePageChange(e)}
            />
        </>
    )   
}


export default Users;