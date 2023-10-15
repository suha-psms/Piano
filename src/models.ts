export interface Note {
    type: NoteType
    notePitch: noteLetter; 
    id:string
  }
  
export type NoteType = "natural" | "sharp";

export type naturalNotePitch = "A" | "B" | "C" | "D" | "E" | "F" | "G" ; 

export type sharpNotePitch = "ASharp" | "BSharp" | "CSharp" | "DSharp" | "ESharp" | "FSharp" | "GSharp" ; 

export type noteLetter = naturalNotePitch | sharpNotePitch;  
