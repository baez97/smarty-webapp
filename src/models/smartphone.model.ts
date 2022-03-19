export interface ISmartphone {
  _id: string,
  deviceId: string,
  name: string,
  manufacturer: string,
  description: string,
  color: string,
  price: number,
  screenSize: {
    inches: number,
    width: number,
    height: number
  },
  os: {
    type: string
  },
  ram: number,
  rom: number,
  processor: {
    cores: number,
    frequency: number,
    name: string
  },
  imageUrl: string
}