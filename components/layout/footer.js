import { useDispatch } from 'react-redux';
import { close, open} from '../../redux/reducers/alertslice';

export default function Footer() {
  const dispatch = useDispatch();
    return(
      <>
        <hr></hr>
        <h1>footer</h1>
        <button onClick={() => dispatch(open())} className="p-4">show</button>
        <button onClick={() => dispatch(close())} className="p-4">Hide</button>
      </>
    );
}