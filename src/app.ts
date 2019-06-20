import { App } from '@aws-cdk/cdk';
import { OutputStack } from './stack';
const prefix = 'PocketCards';

const app = new App();
new OutputStack(app, `${prefix}-Outputs`);

// キー数
// const keys = Object.keys(outputs);
// //
// let idx = 0;

// while (keys.length > 0) {
//   const items = keys.splice(0, 60);

//   idx = idx + 1;
//   new OutputStack(app, `OutputStack${idx}`, {
//     env: {
//       items,
//     },
//   });
// }
// new OutputStack(app, `OutputStack`);
