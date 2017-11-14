const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()
const { green, yellow } = require('chalk')
const { first, second } = require('./subject')
const log = color => message => console.log(color(message))
const show = log(yellow)
const complete = log(green)

suite
  .add(first.name, () => first())
  .add(second.name, () => second())
  .on('cycle', event => show(event.target))
  .on('complete', () =>
    complete(`Fastest is ${suite.filter('fastest').map('name')}`)
  )
  .run({ 'async': true })
