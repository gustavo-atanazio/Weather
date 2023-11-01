import { BiSearch } from "react-icons/bi";
import styles from './Form.module.css';
import Container from "components/Container";

function Form() {
    return (
        <form className={styles.form}>
            <Container>
                <h2>Busque o clima de algum lugar</h2>

                <div className={styles.user_search}>
                    <input type="text" required />

                    <button>
                        <BiSearch size={25} color={'#FFF'} />
                    </button>
                </div>
            </Container>
        </form>
    )
}

export default Form;