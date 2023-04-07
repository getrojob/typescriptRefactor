import * as fs from 'fs';

interface EnvironmentPropertie {
  key: string;
  value: string;
}

interface Resource {
  environment: string;
  aplication: string;
  component: string;
  environmentPropertie: {
    properties: EnvironmentPropertie[];
  };
}

const data = JSON.parse(
  fs.readFileSync(
    'c:\\$\\cursojstypescript\\src\\A0022-public-private\\lista.json',
    'utf-8',
  ),
);

for (let i = 0; i < data.length; i++) {
  const resources: Resource[] = [
    {
      environment: data[i].resource.environment,
      aplication: data[i].resource.aplication,
      component: data[i].resource.component,
      environmentPropertie: {
        properties: [
          {
            key: 'porta',
            value: data[i].resource.environmentPropertie.properties[0].value,
          },
          {
            key: 'version',
            value: data[i].resource.environmentPropertie.properties[1].value,
          },
          {
            key: 'instance',
            value: data[i].resource.environmentPropertie.properties[2].value,
          },
          {
            key: 'base',
            value: data[i].resource.environmentPropertie.properties[3].value,
          },
        ],
      },
    },
  ];
  const json = JSON.stringify(resources, null, 2);
  console.log(json);
}
