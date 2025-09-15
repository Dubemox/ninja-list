import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {

const res = await fetch("http://localhost:3000/api/hello");
const data = await res.json();

return {
  props: { hello: data }
}

}

const Hello = ({ hello }) => {
  return ( 
    <div>
      <h1>All Ninjas</h1>
      {hello.map(hello => (
        <Link href={'/ninjas/' + hello.id} key={hello.id} className={styles.single}>

            <h3>{ hello.name }</h3>
        </Link>
      ))}
    </div>
   );
}

export default Hello;
