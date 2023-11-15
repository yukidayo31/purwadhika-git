class Queue {
  constructor() {
    this.queue = [];
  }

  add(order) {
    this.queue.push(order);
  }

  print() {
    console.log(this.queue);
  }

  async run() {
    try {
      let i = 0;
      while (i < this.queue.length) {
        let randomTime = Math.floor(Math.random() * 11);
        let result = await new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log(`${this.queue[i]} is being made at the moment...`);
            resolve(
              `${this.queue[i]} from Queue ${
                i + 1
              } is done in ${randomTime} minutes`
            );
          }, randomTime * 1000);
        });
        console.log(result);
        i++;
      }
    } catch (error) {
      console.log("No order available!");
    }
  }
}

module.exports = Queue;
