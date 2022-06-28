import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../schematics/collection.json');

describe('add-onpush-everywhere', () => {
  let runner: SchematicTestRunner;
  let tree: Tree;

  beforeEach(() => {
    runner = new SchematicTestRunner('schematics', collectionPath);
    tree = Tree.empty();
  });

  it('noop', async () => {
    await runner.runSchematicAsync('add-onpush-everywhere', {}, tree).toPromise();
    expect(true).toBe(true);
  });
});
