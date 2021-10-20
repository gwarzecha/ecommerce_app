import { FaOpencart } from "react-icons/fa";

import Container from "../Container/Container";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>2BadCats Store</p>
        <p className={styles.headerCart}>
          <button className="snipcart-checkout">
            <FaOpencart />
            <span className="snipcart-total-price">
              $0.00
            </span>
          </button>
        </p>
      </Container>
    </header>
  );
};

export default Header;
