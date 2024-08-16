import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    order: Attribute.Integer;
  };
}

export interface LinkSocialmedia extends Schema.Component {
  collectionName: 'components_link_socialmedias';
  info: {
    displayName: 'Socialmedia';
    description: '';
  };
  attributes: {
    logo: Attribute.Media<'images'> & Attribute.Required;
    url: Attribute.String;
    order: Attribute.Integer;
    title: Attribute.String;
  };
}

export interface ItemsServices extends Schema.Component {
  collectionName: 'components_items_services';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ItemUpdate extends Schema.Component {
  collectionName: 'components_item_updates';
  info: {
    displayName: 'Update';
  };
  attributes: {
    updateTitle: Attribute.String;
    updateDescription: Attribute.RichText;
    updateIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ButtonLink extends Schema.Component {
  collectionName: 'components_button_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.String;
    title: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.link': MenuLink;
      'link.socialmedia': LinkSocialmedia;
      'items.services': ItemsServices;
      'item.update': ItemUpdate;
      'button.link': ButtonLink;
    }
  }
}
