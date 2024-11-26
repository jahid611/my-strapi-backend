import type { Schema, Struct } from '@strapi/strapi';

export interface AbilitiesE extends Struct.ComponentSchema {
  collectionName: 'components_abilities_es';
  info: {
    description: '';
    displayName: 'E';
  };
  attributes: {
    cooldown: Schema.Attribute.Integer;
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AbilitiesPassif extends Struct.ComponentSchema {
  collectionName: 'components_abilities_passifs';
  info: {
    description: '';
    displayName: 'passif';
  };
  attributes: {
    cooldown: Schema.Attribute.Integer;
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AbilitiesQ extends Struct.ComponentSchema {
  collectionName: 'components_abilities_qs';
  info: {
    description: '';
    displayName: 'Q';
  };
  attributes: {
    cooldown: Schema.Attribute.Integer;
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AbilitiesR extends Struct.ComponentSchema {
  collectionName: 'components_abilities_rs';
  info: {
    description: '';
    displayName: 'R';
  };
  attributes: {
    cooldown: Schema.Attribute.Integer;
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AbilitiesW extends Struct.ComponentSchema {
  collectionName: 'components_abilities_ws';
  info: {
    description: '';
    displayName: 'W';
  };
  attributes: {
    cooldown: Schema.Attribute.Integer;
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'abilities.e': AbilitiesE;
      'abilities.passif': AbilitiesPassif;
      'abilities.q': AbilitiesQ;
      'abilities.r': AbilitiesR;
      'abilities.w': AbilitiesW;
    }
  }
}
