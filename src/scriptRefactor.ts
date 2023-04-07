import * as fs from 'fs';

interface EnvironmentProperty {
  key: string;
  value: string;
}

interface Resource {
  environment: string;
  application: string;
  component: string;
  environmentProperties: EnvironmentProperty[];
}

function readJsonFile(path: string): any {
  const content = fs.readFileSync(path, 'utf-8');
  return JSON.parse(content);
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

const data = readJsonFile(
  'c:\\$\\cursojstypescript\\src\\A0022-public-private\\lista.json',
);
const resources = convertData(data);
const json = generateOutput(resources);
console.log(json);
