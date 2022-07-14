/* Note: this file is generated by "npm run template", please dont modify this file directly */
import { ResultDir } from 'alilc-lowcode-types';

import { createResultDir } from '../../../../../utils/resultHelper';
import { runFileGenerator } from '../../../../../utils/templateHelper';
import file0 from './files/.eslintignore';
import file1 from './files/.eslintrc.js';
import file2 from './files/.gitignore';
import file3 from './files/.prettierignore';
import file4 from './files/.prettierrc.js';
import file5 from './files/.stylelintignore';
import file6 from './files/.stylelintrc.js';
import file7 from './files/jsconfig.json';
import file8 from './files/README.md';
import file9 from './files/tsconfig.json';

export function generateStaticFiles(root = createResultDir('.')): ResultDir {
  runFileGenerator(root, file0);
  runFileGenerator(root, file1);
  runFileGenerator(root, file2);
  runFileGenerator(root, file3);
  runFileGenerator(root, file4);
  runFileGenerator(root, file5);
  runFileGenerator(root, file6);
  runFileGenerator(root, file7);
  runFileGenerator(root, file8);
  runFileGenerator(root, file9);
  return root;
}
