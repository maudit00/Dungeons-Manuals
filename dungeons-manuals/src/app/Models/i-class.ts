export interface IClass {
  index: string
  name: string
  hit_die: number
  proficiency_choices: ProficiencyChoice[]
  proficiencies: Proficiency[]
  saving_throws: SavingThrow[]
  starting_equipment: StartingEquipment[]
  starting_equipment_options: StartingEquipmentOption[]
  class_levels: string
  multi_classing: MultiClassing
  subclasses: Subclass[]
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
  item: Item
}

export interface Item {
  index: string
  name: string
  url: string
}

export interface Proficiency {
  index: string
  name: string
  url: string
}

export interface SavingThrow {
  index: string
  name: string
  url: string
}

export interface StartingEquipment {
  equipment: Equipment
  quantity: number
}

export interface Equipment {
  index: string
  name: string
  url: string
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
  of?: Of
  choice?: Choice
}

export interface Of {
  index: string
  name: string
  url: string
}

export interface Choice {
  desc: string
  choose: number
  type: string
  from: From3
}

export interface From3 {
  option_set_type: string
  equipment_category: EquipmentCategory
}

export interface EquipmentCategory {
  index: string
  name: string
  url: string
}

export interface MultiClassing {
  prerequisites: Prerequisite[]
  proficiencies: Proficiency2[]
}

export interface Prerequisite {
  ability_score: AbilityScore
  minimum_score: number
}

export interface AbilityScore {
  index: string
  name: string
  url: string
}

export interface Proficiency2 {
  index: string
  name: string
  url: string
}

export interface Subclass {
  index: string
  name: string
  url: string
}

