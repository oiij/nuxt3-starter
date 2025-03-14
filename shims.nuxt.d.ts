declare module '#app' {
  interface PageMeta {
    layout?: string
    title?: string
    hide?: boolean
    keepAlive?: boolean
    transition?: string
    requireAuth?: boolean
    isLayout?: boolean
    icon?: string
    sort?: number
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}
