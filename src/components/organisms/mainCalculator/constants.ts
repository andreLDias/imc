export const IMC_CATEGORIES: { [key: string]: number[] } = {
  lowWeight: [0, 18.5],
  normalWeight: [18.5, 24.9],
  overWeight: [25, 29.9],
  obesity1: [30, 34.9],
  obesity2: [35, 39.9],
  obesity3: [40, 999],
}

export const ImcTranslator = (word: string) => ({
  lowWeight: 'Abaixo do peso',
  normalWeight: 'Peso normal',
  overWeight: 'Sobre-peso',
  obesity1: 'Obesidade 1',
  obesity2: 'Obesidade 1',
  obesity3: 'Obesidade 1',
}[word] || word)