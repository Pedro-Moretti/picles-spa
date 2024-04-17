import dog from '../../assets/dog.svg'
import { Link } from 'react-router-dom';
import { Button, ButtonVariant } from "../../components/common/Button";
import styles from './Home.module.css'

export function Home() {
    return (
        <div className={styles.container}>
          <img src={dog} /*width="278px"*/ />

          <Link to="/pets">
            <Button variant={ButtonVariant.Default}>Quero adotar</Button>
          </Link>
          
          <Link to="/admin">
            <Button variant={ButtonVariant.Outlined}>Tenho um abrigo</Button>
          </Link>
          
        </div>
  )
}