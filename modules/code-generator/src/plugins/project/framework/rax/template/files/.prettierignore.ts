/* eslint-disable max-len */
/* Note: this file is generated by "npm run template", please dont modify this file directly */
/* -- instead, you should modify "static-files/rax/.prettierignore.template" and run "npm run template" */
import { ResultFile } from 'alilc-lowcode-types';

export default function getFile(): [string[], ResultFile] {
  return [
    ['.'],
    {
      name: '.prettierignore',
      ext: '',
      content: 'node_modules/\nlib/\ndist/\nbuild/\ncoverage/\ndemo/\nes/\n.rax/\n',
    },
  ];
}
