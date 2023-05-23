import styles from './App.module.css'
import React, { useState } from 'react'
import Logo from './assets/powered.png'
import LeftArrowImage from './assets/leftarrow.png'
import { levels, calculateIMC } from './assets/helpers/imc'
import { GridItem } from './assets/GridItem'

function App() {
  const [heightField, setHeightField] = useState(0)
  const [weightField, setWeightField] = useState(0)
  const [toShow, setToShow] = useState(null)

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateIMC(heightField, weightField))

    } else {
      alert('Preencha os campos com sua altura e seu peso')
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={Logo} alt="logo" width={150} />
          <div>made with love by Guilherme Almeida</div>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          <input
            type="number"
            placeholder='Digite a sua altura. Ex: 1.8 (Em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder='Digite a seu peso. Ex: 60.5 (Em quilosgramas)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button
            onClick={handleCalculateButton}
            disabled={toShow ? true : false}>
            Calcular
          </button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key}
                  item={item} />
              ))}
            </div>
          }

          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={LeftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>}
        </div>

      </div>
    </div>
  )
}

export default App
