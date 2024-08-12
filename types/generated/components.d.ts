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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.link': MenuLink;
      'items.services': ItemsServices;
      'item.update': ItemUpdate;
    }
  }
}
