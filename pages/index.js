import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/reducers/counterslice';

export default function Home() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div className="mt-40">
      <div>
        <button className="bg-green"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
