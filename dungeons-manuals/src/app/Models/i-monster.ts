import { IRef } from './i-ref';

export interface IMonster{
  index: string
  name: string
  size: string
  type: string
  alignment: string
  armor_class: ArmorClass[]
  hit_points: number
  hit_dice: string
  hit_points_roll: string
  speed: Speed
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
  proficiencies: Proficiencies[]
  damage_vulnerabilities: any[]
  damage_resistances: any[]
  damage_immunities: any[]
  condition_immunities: any[]
  senses: Senses
  languages: string
  challenge_rating: number
  proficiency_bonus: number
  xp: number
  special_abilities: SpecialAbility[]
  actions: Action[]
  legendary_actions: LegendaryAction[]
  image: string
  url: string
}

interface ArmorClass {
  type: string
  value: number
}

interface Speed {
  walk: string
  swim: string
  fly: string
}

interface Proficiencies {
  value: number
  proficiency: IRef
}

interface Senses {
  darkvision: string
  passive_perception?: number
  blindsight: string
}

interface SpecialAbility {
  name: string
  desc: string
  dc?: Dc
  usage: Usage
}

interface Dc {
  dc_type: IRef
  dc_value: number
  success_type: string
}

interface Action {
  name: string
  multiattack_type?: string
  desc: string
  actions: Action2[]
  attack_bonus?: number
  dc?: Dc2
  damage?: Damage[]
  usage?: Usage
}

interface Action2 {
  action_name: string
  count: number
  type: string
}

interface Dc2 {
  dc_type: IRef
  dc_value: number
  success_type: string
}

interface Damage {
  damage_type: IRef
  damage_dice: string
}

interface Usage {
  type: string
  times: number
  rest_types?: []
}

interface LegendaryAction {
  name: string
  desc: string
  attack_bonus?: number
  damage?: Damage2[]
  dc?:Dc
}

interface Damage2 {
  damage_type: IRef
  damage_dice: string
}

