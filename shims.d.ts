declare module 'nuxt/schema' {
  interface AppConfig {
    // This will entirely replace the existing inferred `theme` property
    theme: {
      // You might want to type this value to add more specific types than Nuxt can infer,
      // such as string literal types
      primaryColor?: 'red' | 'blue'
    }
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}
