
export interface ChecklistState {
  camera: boolean;
  screen: boolean;
  sound: boolean;
  rec: boolean;
}

export type ChecklistKey = keyof ChecklistState;
