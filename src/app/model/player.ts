class Player {
  type: string;
  id: string;
  attributes: Attributes;
  relationships: RelationShips;
}


class Attributes {
  name: string;
  stats: boolean;
  titleId: string;
  shardId: string;
  patchVersion: string;
}

class RelationShips {
  matches: Array<string>;
}
