import React,{useEffect} from 'react';
import {useDispatch, useSelector, connect} from 'react-redux';
import {buyCake, fetch, setUsers} from '../redux';
import axios from 'axios';

const Home = (props) => {

  // console.log(props);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsers(props.myUsers));
  },[]);

  return (
    <div>
      <h2>Number of cakes available - {props.numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>

      <button onClick={() => dispatch(fetch())}>Fetch</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    numberOfCakes : state.number
  }
};

Home.getInitialProps = async (ctx) => {
  let response;
  response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return {
    myname : "Abhinav",
    myUsers : response.data
  }
}


export default connect(mapStateToProps)(Home);
