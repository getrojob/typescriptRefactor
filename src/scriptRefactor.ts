import * as fs from 'fs';
import { Resource, InputJson, OutputJson } from './Interface/interfaces';
import * as pathJoin from 'path';

function readJsonFile(path: string): any {
  const content = fs.readFileSync(path, 'utf-8');
  return JSON.parse(content);
}
function createJsonFile(path: string, outputJson: OutputJson[]): any {
  const content = fs.writeFile(
    path,
    JSON.stringify(outputJson, null, 2),
    (err) => {
      if (err) throw err;
      console.log('O arquivo foi criado!');
    },
  );
  return content;
}

function convertData(data: any): Resource[] {
  return data.map((item: any) => ({
    environment: item.resource.environment,
    application: item.resource.application,
    component: item.resource.component,
    environmentProperties: item.resource.environmentPropertie.properties.map(
      (prop: any) => ({
        key: prop.key,
        value: prop.value,
      }),
    ),
  }));
}

function generateOutput(data: Resource[]): string {
  return JSON.stringify(data, null, 2);
}

const data = readJsonFile(pathJoin.join(`${__dirname}/lista.json`));
const resources = convertData(data);
const json = generateOutput(resources);

console.log('trocando os valores');

const inputJson: InputJson[] = data;

const outputJson: OutputJson[] = inputJson.map((input: InputJson) => {
  const { environmentPropertie } = input.resource;
  const { properties: environmentProperty } = environmentPropertie;
  const instanceIndex = environmentProperty.findIndex(
    (prop) => prop.key === 'instance',
  );
  const baseIndex = environmentProperty.findIndex(
    (prop) => prop.key === 'base',
  );
  const instanceValue = environmentProperty[instanceIndex].value;
  const baseValue = environmentProperty[baseIndex].value;
  environmentProperty[instanceIndex].value = baseValue;
  environmentProperty[baseIndex].value = instanceValue;
  return { resource: input.resource };
});

const createFile = createJsonFile(
  pathJoin.join(`${__dirname}/Newlista.json`),
  outputJson,
);
