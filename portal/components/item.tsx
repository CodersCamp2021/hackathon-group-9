import * as React from "react";
import styles from "../styles/Item.module.css";
import { Icon } from '@iconify/react';

type ItemProps = {
    time: string
    url: string
    upvotes: string
    downvotes: string
}

function Item({time, url, upvotes, downvotes}: ItemProps) {

    return (

                <div className={styles.item}>
                    <p className={styles.time}>{time}</p>
                    <p className={styles.url}>{url}</p>
                    <div className={styles.votesWrapper}>
                        <div className={styles.vote}>
                            <Icon icon="cil:arrow-thick-top" className={styles.upVoteArrow} />
                            <p className={styles.upvotes}>{upvotes}</p>
                        </div>
                        <div className={styles.vote}>
                            <Icon icon="cil:arrow-thick-bottom" className={styles.downVoteArrow} />
                            <p className={styles.downvotes}>{downvotes}</p>
                        </div>
                    </div>
                </div>
    )
}

export default Item