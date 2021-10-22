import { useEffect, useState } from "react"
import { IMC_CATEGORIES, ImcTranslator } from "./constants"

export const useMainCalculator = () => {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [imc, setImc] = useState(0)
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const checkIMCratio = (imcValue: number) => {
    let imcCategory
    const categories = Object.keys(IMC_CATEGORIES)
    for (var category of categories) {
      const values = IMC_CATEGORIES[category]
      if (imcValue >= values[0] && imcValue < values[1]) imcCategory = category
    }

    return imcCategory
  }

  useEffect(() => {
    if (weight && height) return setButtonDisabled(false)
    setButtonDisabled(true)
  }, [weight, height])


  const handleWeightInput = (weightInput: number) => {
    setWeight(weightInput)
  }

  const handleHeightInput = (heightInput: number) => {
    setHeight(heightInput)
  }

  const handleCalculateImcButton = () => {
    const heightInMeters = height / 100
    const value = Math.round(weight / (heightInMeters * heightInMeters) * 100) / 100
    setImc(value)
    const rate = checkIMCratio(value)
    alert(`Seu IMC é: ${(value).toString().replace(/\./g, ',')}. Sua categoria é: ${ImcTranslator(rate!)}`)
  }

  const states = {
    weight,
    setWeight,
    height,
    setHeight,
    imc,
    setImc,
    buttonDisabled,
    setButtonDisabled
  }
  const handlers = {
    handleWeightInput,
    handleHeightInput,
    handleCalculateImcButton
  }

  return {
    states,
    handlers
  }
}