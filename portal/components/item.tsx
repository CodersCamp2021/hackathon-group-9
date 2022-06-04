import React from "react";
import styles from "../styles/Item.module.css";
import { Icon } from "@iconify/react";

type ItemProps = {
  time: string;
  url: string;
  upvotes: number;
  downvotes: number;
  flag: string;
  onUpVote: VoidFunction;
  onDownVote: VoidFunction;
};

function Item({
  time,
  url,
  upvotes,
  downvotes,
  flag,
  onUpVote,
  onDownVote,
}: ItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.flagContainer}>
        <img className={styles.flag} src={`${flag}-flag.png`} />
      </div>
      <p className={styles.time}>{time}</p>
      <p className={styles.url}>{url}</p>
      <div className={styles.votesWrapper}>
        <div className={styles.vote}>
          <button className={styles.voteBtn} onClick={onUpVote}>
            <Icon icon="cil:arrow-thick-top" className={styles.upVoteArrow} />
          </button>
          <p className={styles.upvotes}>{upvotes}</p>
        </div>
        <div className={styles.vote}>
          <button className={styles.voteBtn} onClick={onDownVote}>
            <Icon
              icon="cil:arrow-thick-bottom"
              className={styles.downVoteArrow}
            />
          </button>
          <p className={styles.downvotes}>{downvotes}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
