import { searchBackground } from "../../utils/const";
import styles from './search.module.scss'
import Categories from "../categories/categories";
import Sorting from "../sorting/sorting";

export default function Search() {

    return(
        <section className={styles.search}>
            <div className={styles.wrapper}>
                <h1>Search for books</h1>
                <div className={styles.searchInput}>
                    <input type="text" />
                    <button>
                        <img src="./images/icons/searchIcon.svg" width={20} height={20} alt="" />
                    </button>
                </div>
                <Categories />
                <Sorting />
            </div>
            <img src={searchBackground} alt="" />
        </section>
    )
}