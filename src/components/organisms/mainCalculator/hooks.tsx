import { useState } from "react"

export const useMainCalculator = () => {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [imc, setImc] = useState(0)

  const handleWeightInput = (weightInput: number) => {
    setWeight(weightInput)
  }

  const handleHeightInput = (heightInput: number) => {
    setHeight(heightInput)
  }

  const handleCalculateImcButton = () => {
    const heightInMeters = height / 100
    const value = weight / (heightInMeters * heightInMeters)
    setImc(value)
  }

  const states = {
    weight,
    setWeight,
    height,
    setHeight,
    imc,
    setImc
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