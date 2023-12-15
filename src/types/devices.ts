export interface FishPondStatus {
  isOnline: boolean,
  pondState?: string
}

export interface FishMongerStatus {
  mongerIdentifier: string,
  isOnline: boolean,
  mongerState?: string
}
