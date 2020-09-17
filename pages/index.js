import React from 'react';
import {useDispatch, useSelector, connect} from 'react-redux';
import { buyCake } from '../redux';
import axios from 'axios';
import {useRouter} from 'next/router';

const Home = (props) => {

  const router = useRouter();
  
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes available - {props.numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>

      <button onClick={() => router.push('/users')}>Users Page</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    numberOfCakes : state.number
  }
};


export default connect(mapStateToProps)(Home);
