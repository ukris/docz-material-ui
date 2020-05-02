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

export const downloadAsJSON = (data:any, filename: string) => {
  if (!data) {
    console.error('No Data')
    return
  }
  if (!filename) filename = 'download.json'
  if (typeof data === 'object') {
    data = JSON.stringify(data, undefined, 4)
  }
  const blob = new Blob([data], { type: 'text/json'})
  const mouseEvent = document.createEvent('MouseEvents')
  const downloadEl = document.createElement('a')

  downloadEl.download = filename
  downloadEl.href = window.URL.createObjectURL(blob)
  downloadEl.dataset.downloadurl = [
    'text/json',
    downloadEl.download,
    downloadEl.href
  ].join(':')
  mouseEvent.initMouseEvent('click',true,false,window,0,0,0,0,0,false,false,false,false,0,null)
  downloadEl.dispatchEvent(mouseEvent)
}
