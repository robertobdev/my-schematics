import { Rule } from '@angular-devkit/schematics';

import { buildComponent } from '@angular/cdk/schematics';

import { Schema as CrudSchema } from './schema';

export function crud(options: CrudSchema): Rule {
  return buildComponent({ ...options });
}
