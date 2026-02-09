import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./valentine.module.css";

export default function Valentine() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <main className={styles.valentinePage}>
        {/* Floating hearts animation */}
        <div className={styles.hearts} aria-hidden="true">
          <div className={styles.heart}>❤️</div>
          <div className={styles.heart}>💕</div>
          <div className={styles.heart}>💗</div>
          <div className={styles.heart}>❤️</div>
          <div className={styles.heart}>💕</div>
          <div className={styles.heart}>💗</div>
          <div className={styles.heart}>❤️</div>
          <div className={styles.heart}>💕</div>
          <div className={styles.heart}>💗</div>
          <div className={styles.heart}>❤️</div>
          <div className={styles.heart}>💕</div>
          <div className={styles.heart}>💗</div>
        </div>

        <div className={styles.cardContainer}>
          {!isOpen && (
            <div className={styles.tapHint}>
              <p>Open with love 💌</p>
            </div>
          )}

          <div
            className={`${styles.card} ${isOpen ? styles.opened : ''}`}
            onClick={handleCardClick}
          >
            {/* Cover page */}
            <div className={styles.coverPage}>
              <div className={styles.photoFrame}>
                <img
                  src="/img/family.png"
                  alt="Our beautiful family"
                  className={styles.familyPhoto}
                />
              </div>
              <FontAwesomeIcon icon={faHeart} className={styles.coverIcon} />
              <h1 className={styles.coverTitle}>To My Love</h1>
              <div className={styles.decorativeHearts}>
                <span>💕</span>
                <span>💗</span>
                <span>💕</span>
              </div>
            </div>

            {/* Inside content page */}
            <div className={styles.contentPage}>
              <h2 className={styles.greeting}>Princess,</h2>

              <div className={styles.letterText}>
                <p>
                  Hindi ko man lagi nasasabi sayo at kasalanan ko un pero mahal na mahal kita. Simula kasi ng kinasal tayo medyo nahirapan na ako gumalaw. I use to do lots of surprises pero nahirapan ako magadjust and its my fault. Akala ko noon enough na ung magaya ng random dates pero di ko naisip na kelangan mo rin ng words of affirmation.
                </p>
                <p>
                  Im sorry for being selfish pero do know that I will always love you. Our relationship is not perfect but for me learning and adjusting as long as ikaw ung kasama ko is all I could ever ask for. Im sorry for the times that i have hurt you, I am still trying to better myself and I hope you can hold my hand while I get there.
                </p>
                <p>
                  Happy Valentines Sweetheart! I love you!!
                </p>
              </div>

              <div className={styles.signature}>
                <p>All my love,</p>
                <p className={styles.signatureName}>Your Husband ❤️</p>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
