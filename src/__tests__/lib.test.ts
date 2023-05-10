import {describe, test, expect } from 'vitest'
import {libCount, testCountA} from "../lib";


describe("Lib test", () => {

  test('with percentage 1, period 1', () => {
    expect(libCount(100,1,1)).equals(101)
  })


  test('With percentage -1, period 1', () => {
    expect(libCount(100,-1,1)).equals(99)
  })


  test('With percentage 1, period 2', () => {
    expect(libCount(100,1,2)).equals(102.01)
  })

  test('With percentage 1, period 3', () => {
    expect(libCount(100,1,3)).equals(103.0301)
  })
})

