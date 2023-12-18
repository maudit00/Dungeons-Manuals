import { IRef } from "./i-ref"

export interface IClass {
  index: string
  name: string
  hit_die: number
  proficiency_choices: IRef[]
  proficiencies: IRef[]
  saving_throws: IRef[]
  starting_equipment: StartingEquipment[]
  starting_equipment_options: StartingEquipmentOption[]
  class_levels: string
  multi_classing: MultiClassing
  subclasses: IRef[]
  url: string
}

export interface ProficiencyChoice {
  desc: string
  choose: number
  type: string
  from: From
}

export interface From {
  option_set_type: string
  options: Option[]
}

export interface Option {
  option_type: string
  item: IRef
}

export interface StartingEquipment {
  equipment: IRef
  quantity: number
}

export interface StartingEquipmentOption {
  desc: string
  choose: number
  type: string
  from: From2
}

export interface From2 {
  option_set_type: string
  options: Option2[]
}

export interface Option2 {
  option_type: string
  count?: number
  of?: IRef
  choice?: Choice
}

export interface Choice {
  desc: string
  choose: number
  type: string
  from: From3
}

export interface From3 {
  option_set_type: string
  equipment_category: IRef
}

export interface MultiClassing {
  prerequisites: Prerequisite[]
  proficiencies: IRef[]
}

export interface Prerequisite {
  ability_score: IRef
  minimum_score: number
}

