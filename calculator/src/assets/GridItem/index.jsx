import styles from './GridItem.module.css';
import UpImage from '../../assets/up.png'
import DownImage from '../../assets/down.png'
import { React } from 'react'


export const GridItem = ({ item }) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        <img src={item.icon === 'up' ? UpImage : DownImage} alt="img" width={30} />
      </div>
      <div className={styles.gridTitle}> {item.title} </div>

      {item.yourImc &&
        <div className={styles.yourImc}> Seu IMC é de {item.yourImc} kg/m²</div>
      }

      <div className={styles.gridInfo}>
        <>
          IMC está entre <strong>{item.imc[0]}</strong> e <strong> {item.imc[1]}</strong>
        </>
      </div>





    </div>
  )
}