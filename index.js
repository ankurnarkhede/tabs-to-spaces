/**
 * The function converts the tabs in the data into appropriate number of spaces
 *
 * @param data {String} - Data in string format to be converted into spaces
 * @param tabSize {Number} - Size of a tab character
 * @returns data {String} - Data with tabs converted to spaces
 */
const tabsToSpaces = (data, tabSize = 4) => {
  if (typeof (data) !== 'string') {
    return data
  }

  tabSize = parseInt(tabSize)

  let charIndex = data.indexOf('\t')
  const newLineIndex = data.substr(0, charIndex).lastIndexOf('\n')

  if (charIndex === -1) {
    return data
  }

  charIndex -= (newLineIndex > 0 ? newLineIndex : 0)
  let buffer = charIndex % tabSize

  if (charIndex < tabSize) {
    buffer = charIndex
  } else if (charIndex === tabSize) {
    buffer = 0
  }

  /**
   * Converting tab character to appropriate number of spaces
   */
  while (charIndex < data.length) {
    if (data[charIndex] === '\t') {
      data = data.replace(data[charIndex], ' '.repeat(tabSize - buffer))
      charIndex += (tabSize - buffer)
      buffer = 0
      continue
    } else {
      buffer++
    }

    if (buffer >= tabSize || data[charIndex] === '\n') {
      buffer = 0
    }
    charIndex++
  }

  return data
}

module.exports = tabsToSpaces
