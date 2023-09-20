import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchGreeting from '../redux/thunk';

function Greeting() {
  const greetingMsg = useSelector((store) => store.message.greeting);
  const isLoading = useSelector((store) => store.message.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h3>Random Greeting:</h3>
      <h1>{greetingMsg}</h1>
    </div>
  );
}

export default Greeting;
