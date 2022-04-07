import { Controller } from './controller.js';

const main = () => {
  const controller = new Controller();
  controller.addList({
    id: 4,
    name: 'a',
    done: false
  });
};

main();
