export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      user: {
        Row: {
          email: string
          end: string | null
          id: number
          name: string
          password: string
          role: string
          start: string | null
          title: string
        }
        Insert: {
          email: string
          end?: string | null
          id?: number
          name: string
          password: string
          role?: string
          start?: string | null
          title: string
        }
        Update: {
          email?: string
          end?: string | null
          id?: number
          name?: string
          password?: string
          role?: string
          start?: string | null
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
