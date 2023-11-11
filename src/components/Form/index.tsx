import { useMemo, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Container from "components/Container";
import styles from './Form.module.css';

interface FormProps {
    setCity: React.Dispatch<React.SetStateAction<string>>
}

function Form({ setCity }: FormProps) {
    const [search, setSearch] = useState('');
    const searchIcon = useMemo(() => <BiSearch size={25} color={'#FFF'}/>, []);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setCity(search);
        setSearch('');
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Container>
                <h2>Busque o clima de alguma cidade</h2>

                <div className={styles.user_search}>
                    <input
                        value={search}
                        onChange={event => setSearch(event.target.value)}
                        type="text"
                        required
                    />

                    <button type='submit'>
                        {searchIcon}
                    </button>
                </div>
            </Container>
        </form>
    )
}

export default Form;