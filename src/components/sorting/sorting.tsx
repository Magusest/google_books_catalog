import { useState } from "react";
import { SortingList } from "../../utils/const";
import styles from './sorting.module.scss'

export default function Sorting() {
    const [sortingClose, setSortingClose] = useState(true);

    return(
        <div className={styles.sorting}>
            <p>Sorting by</p>
                <ul onClick={() => setSortingClose(!sortingClose)}>
                    {sortingClose
                        ?
                            <li>{SortingList[1]}</li>
                        :
                        SortingList.map((sort) => (
                                <li>
                                    {sort}
                                </li>
                            ))}
                </ul>
        </div>

    )
}