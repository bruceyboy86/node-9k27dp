import { Tree } from '@angular-devkit/schematics';
import { editDecorators, getAllDecorators } from 'ng-morph';

export function addOnpushEverywhere() {
  return async (host: Tree) => {
    const declarations = getAllDecorators('**/*.component.ts', {
      name: 'Component'
    });

    editDecorators(declarations, declaration => ({
      arguments: [] /* fancy code here */
    }));
  };
}
