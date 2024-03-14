import { createEnv } from 'yeoman-environment';
import inquirer from 'inquirer';

const env = createEnv()
const generators = await env.lookup();

const templateMap = new Map()
templateMap.set('react极简模版', 'react-ryan')
const answers = await inquirer.prompt([
    {
        type: 'list',
        name: 'template',
        message: '请选择项目模板:',
        choices: ['react极简模版'],
    },
])
const runResult =await env.run(templateMap.get(answers.template), { skipInstall: true });
console.log('项目初始化完成')
