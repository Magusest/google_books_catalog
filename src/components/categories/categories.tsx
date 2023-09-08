import { useState } from "react";
import { CategoriesList } from "../../utils/const";
import styles from './categories.module.scss'


export default function Categories() {
    const [categoriesClose, setCategoriesClose] = useState(true);

    return(
        <div className={styles.categories}>
            <p>Categories</p>
            <ul onClick={() => setCategoriesClose(!categoriesClose)}>
                <li>{CategoriesList[1]}</li>
            </ul>
            {categoriesClose
                    ?
                        null
                    :
                        <ul 
                            className={styles.categoriesOpen}
                            onClick={() => setCategoriesClose(!categoriesClose)}
                            >
                                {CategoriesList.map((categorie) => (
                                    <li>
                                        {categorie}
                                    </li>
                                ))}
                            </ul>
                }

        </div>

    )
}