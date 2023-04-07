export interface Resource {
  environment: string;
  application: string;
  component: string;
  environmentPropertie: EnvironmentPropertie;
}

interface EnvironmentPropertie {
  properties: EnvironmentProperty[];
}

interface EnvironmentProperty {
  key: string;
  value: string;
}

export interface InputJson {
  resource: Resource;
}

export interface OutputJson {
  resource: {
    environment: string;
    application: string;
    component: string;
    environmentPropertie: {
      properties: EnvironmentProperty[];
    };
  };
}
