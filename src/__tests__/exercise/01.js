// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {

  const div = document.createElement('div') 
  document.body.append(div)

  ReactDOM.render(<Counter/> , div)

  const message = div.firstChild.querySelector('div')
  const [decrement, increment] = div.querySelectorAll('button')
  // use MouseEvent to generate more accurate event
  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0
  })
  const countMessage = 'Current count:'

  increment.dispatchEvent(clickEvent)
  expect(message.textContent).toBe(`${countMessage} 1`)

  increment.dispatchEvent(clickEvent)
  expect(message.textContent).toBe(`${countMessage} 2`)

  decrement.dispatchEvent(clickEvent)
  expect(message.textContent).toBe(`${countMessage} 1`)

  decrement.dispatchEvent(clickEvent)
  expect(message.textContent).toBe(`${countMessage} 0`)

  decrement.dispatchEvent(clickEvent)
  expect(message.textContent).toBe(`${countMessage} -1`)

  div.remove() // cleanup
})

/* eslint no-unused-vars:0 */
