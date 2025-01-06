
export interface MachineModel {
    id: number | undefined,
    name: string
    type: string
    description: string
    attributes: Attributes
    location: string
}
  
interface Attributes {
    health: number
    armor: string
    weaknesses: string[]
    abilities: string[]
    weapons: string[]
}
  