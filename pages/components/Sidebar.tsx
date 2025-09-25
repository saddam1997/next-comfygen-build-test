import React from "react";
import styles from "./styles.module.css";
const Sidebar = (props) => {
    return (
        <div className={styles.mainSection}>
        <div className={styles.leftSide}>
          <p>Sidebar content here</p>
        </div>
        <div className={styles.rightSide}>
          <div>Content Block 1</div>
          <div>Content Block 2</div>
          <div>Content Block 3</div>
          <div>Content Block 4</div>
          <div>Content Block 5</div>
          <div>Content Block 6</div>
          <div>Content Block 7</div>
          <div>Content Block 8</div>
          <div>Content Block 9</div>
          <div>Content Block 10</div>
          <div>Content Block 11</div>
        </div>
      </div>
      
      
    );
};
export default Sidebar;
