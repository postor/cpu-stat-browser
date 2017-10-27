import Stat from '../index'
const oldLog = console.log
console.log = (...args) => {
  document.write(JSON.stringify(args) + "<br>")
  oldLog.apply(console, args)
}

let stat = new Stat({
  tickCallback: (k) => {
    console.log(k)
    if (k > 100) {
      console.log(`larger than 100, stop profilling [start your app here]`)
      stat.stop()// this will cause stat.start() end
    }
  }
})
test()
stat.start().then(() => {
  console.log(`profilling stopped! [or start your app here]`)
})

async function step() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    })
  })
}

async function test() {
  let sum = 0
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 100000000; j++) {
      sum += 1
    }
    console.log(`sum=${sum}`)
    await step()
  }
}