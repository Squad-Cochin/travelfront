import {useState} from 'react';
import styles from "./expand.module.scss";

export default function App(props) {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <div>
      <a className={styles.expand_button} onClick={handleClick}>See all Reviews</a>

      {/* 👇️ show elements on click */}
      {isShown && (
        <div>
          <p>{props.review}</p>
        </div>
      )}

      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}

function Box() {
  return (
    <div>
      <button className={styles.more_review} href="#">More Reviews</button>
    </div>
  );
}
