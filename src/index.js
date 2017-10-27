
const defaultConfig = {
  period: 1000,
  tickCallback: () => { },
}

/**
 * 
 * 
 * @export
 * @class Stat
 */
export default class Stat {
  constructor(config) {
    this.config = {
      ...defaultConfig,
      ...config
    }

    this.k = 0
    this.profilling = false
    this.interval = undefined
  }

  /**
   * 开始
   * 
   * @memberof Stat
   */
  async start() {
    this.profilling = true
    this.interval = setInterval(() => {
      this.config.tickCallback(this.k)
      this.k = 0
    }, this.config.period)

    while (this.profilling) {
      await this.step()
    }
  }

  /**
   * 结束
   * 
   * @memberof Stat
   */
  stop() {
    clearInterval(this.interval)
    this.profilling = false
  }

  async step() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.k++
        resolve()
      })
    })
  }
}
