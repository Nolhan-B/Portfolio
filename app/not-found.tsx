"use client";
import { useRouter } from "next/navigation";
import styles from "./not-found.module.css"; 
import Image from "next/image";

const NotFound: React.FC = () => {
    const router = useRouter();

    const handleBack = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        router.back();
    };

    return (
        <div className={styles.oopss}>
            <div className={styles.errorText}>
                <Image 
                    className={styles.errorImage} 
                    width={2000} 
                    height={2000} 
                    src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" 
                    alt="404" 
                />
                <span>ERREUR 404</span>
                <p className={styles.pA}>
                    ? Vous êtes perdu(e) 
                </p>
                <div 
                    className={styles.back} 
                    onClick={handleBack}
                    role="button"
                    tabIndex={0}
                >
                    Retour à la page précédente
                </div>
            </div>
        </div>
    );
}

export default NotFound;