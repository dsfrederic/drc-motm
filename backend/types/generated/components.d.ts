import type { Schema, Attribute } from '@strapi/strapi';

export interface TeamLineup extends Schema.Component {
  collectionName: 'components_team_lineups';
  info: {
    displayName: 'lineup';
  };
  attributes: {
    player01: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player02: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player03: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player04: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player05: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player06: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player07: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player08: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player09: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player10: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player11: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player12: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player13: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player14: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player15: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player16: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player17: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player18: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player19: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player20: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player21: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player22: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player23: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
    player24: Attribute.Relation<
      'team.lineup',
      'oneToOne',
      'api::player.player'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'team.lineup': TeamLineup;
    }
  }
}
