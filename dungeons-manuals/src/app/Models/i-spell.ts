import { IRef } from './i-ref';

export interface ISpell {
    index: string
    name: string
    desc: string[]
    higher_level: string[]
    range: string
    components: string[]
    material: string
    ritual: boolean
    duration: string
    concentration: boolean
    casting_time: string
    level: number
    attack_type: string
    damage: Damage
    heal_at_slot_level: IHealAtSlotLevel
    school: IRef
    classes: IRef[]
    subclasses: IRef[]
    url: string
  }

  interface Damage {
    damage_at_character_level: IDamageAtCharacterLevel;
    damage_type: IRef
    damage_at_slot_level?: IDamageAtSlotLevel
  }

  export interface IDamageAtSlotLevel {
    "1": string
    "2": string
    "3": string
    "4": string
    "5": string
    "6": string
    "7": string
    "8": string
    "9": string
  }

  export interface IHealAtSlotLevel{
    "1": string
    "2": string
    "3": string
    "4": string
    "5": string
    "6": string
    "7": string
    "8": string
    "9": string
  }

  export interface IDamageAtCharacterLevel{
    "1": string
    "5": string
    "11": string
    "17": string
  }

