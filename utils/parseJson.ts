export const parseJSON = <T extends string[]>(json: string) => {
  return JSON.parse(json) as T
}

export default parseJSON