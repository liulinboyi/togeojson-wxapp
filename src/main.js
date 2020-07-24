import {
  DOMParser
} from '../lib/dom-parser.js'
import {
  kml,
  gpx
} from '@tmcw/togeojson'

export function togeojson(path, fileContent) {
  const kmlContent = new DOMParser().parseFromString(fileContent)

  let convertedWithStyles;
  if (path.match(/.kml$/g)) {
    convertedWithStyles = kml(kmlContent, {
      styles: true
    })
  } else if (path.match(/.gpx$/g)) {
    convertedWithStyles = gpx(kmlContent, {
      styles: true
    })
  }
  return convertedWithStyles
}

export function stringTogeojson(type, fileContent) {
  const kmlContent = new DOMParser().parseFromString(fileContent)

  let convertedWithStyles;
  if (type === 'kml') {
    convertedWithStyles = kml(kmlContent, {
      styles: true
    })
  } else if (type === 'gpx') {
    convertedWithStyles = gpx(kmlContent, {
      styles: true
    })
  }
  return convertedWithStyles
}