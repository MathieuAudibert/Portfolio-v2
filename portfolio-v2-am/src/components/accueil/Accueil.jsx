import React from "react";
import styles from "./Accueil.module.css";

export const Accueil = () => {
    return (
        <section className={styles.container}>
            <div className={styles.recruitPopup}>
                <p>Je suis actuellement a la recherche d'une alternance a partir de septembre 2025. <a href="/assets/cv/AUDIBERT_Mathieu.pdf" download="AUDIBERT_Mathieu.pdf">Telechargez mon cv ici.</a></p>
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>Salut! 👋 Je m'appelle Mathieu Audibert, Je suis un étudiant essayant de me spécialiser en développement orienté back-end/devOps.</h1>
                <p className={styles.description}>📍 Hauts-De-Seine, Paris, France.</p>
                <div className={styles.contactBtn}>
                    <a href="mailto:mathieu.audibert27@gmail.com"><img src="/assets/icones/emailIcon.png" alt="Logo email"></img></a>
                    <a href="https://github.com/MathieuAudibert"><img src="/assets/icones/githubIcon.png" alt="Logo github"></img></a>
                    <a href="https://www.linkedin.com/in/mathieu-audibert-2b4763252/"><img src="/assets/icones/linkedinIcon.png" alt="Logo linkedin"></img></a>
                </div>
            </div>
        </section>
    );
}