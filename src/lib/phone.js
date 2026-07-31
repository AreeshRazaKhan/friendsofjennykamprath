const extractDigits = (raw) => {
  if (!raw) return ''
  let digits = String(raw).replace(/\D/g, '')
  if (digits.startsWith('1')) {
    digits = digits.slice(1)
  }
  return digits.slice(0, 10)
}

export const formatPhoneInput = (raw) => {
  const digits = extractDigits(raw)
  if (digits.length === 0) return ''
  if (digits.length <= 3) return `+1 (${digits}`
  if (digits.length <= 6) return `+1 (${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `+1 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

export const isPhoneComplete = (raw) => extractDigits(raw).length === 10

/** Phone is optional — blank passes, but a partial entry must block submission. */
export const isPhoneEntryValid = (raw) => {
  const digits = extractDigits(raw)
  return digits.length === 0 || digits.length === 10
}

export const normalizePhoneForSubmit = (raw) => {
  const digits = extractDigits(raw)
  if (digits.length !== 10) return ''
  return `+1 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}
