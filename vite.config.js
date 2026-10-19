import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitLab Pages publishes this app beneath /<project-name>/.
  // Vite uses the CI_PROJECT_NAME environment variable in the pipeline.
  base: process.env.CI_PAGES_URL ? './' : './',
})
