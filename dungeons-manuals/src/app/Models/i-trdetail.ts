export interface ITrDetail {
    index: string
    races: any[]
    subraces: Subrace[]
    name: string
    desc: string[]
    proficiencies: any[]
    url: string

}

export interface Subrace {
  index: string
  name: string
  url: string
}
