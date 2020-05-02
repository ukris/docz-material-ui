export const isURL = (str: string) => {
  try {
    if (new URL(str)) {
      return true
    }
    return false
  } catch(e) {
    return false
  }
}
export function getInitials(name: string) {
  const [firstName, lastName] = name.split(" ")

  if (firstName && lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`
  } else {
    return firstName.charAt(0)
  }
}
export const hashNumber = (s:string)=>{
  let h = 0
  for(let i = 0; i < s.length; i++) {
    h = Math.imul(31, h) + s.charCodeAt(i) | 0
  }
  return (h < 0 ? h * -1 : h)
}

