import { Stack, Construct, StackProps, CfnOutput } from '@aws-cdk/cdk';
import * as json from './init.json';
import * as _ from 'lodash';

const prefix = 'PocketCards';

export class OutputStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const outputs: { [key: string]: { type: string | string[] | (string | string[])[]; value: string | string[] } } = json.outputs;

    Object.keys(outputs).forEach(key => {
      const value = outputs[key].value;

      if (value === '') {
        return;
      }

      new CfnOutput(this, key, {
        export: `${prefix}-${_.upperFirst(_.camelCase(key))}`,
        value,
      });
    });
  }
}
