import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'Dashboard',

  projectId: 'h7z69sg4',
  dataset: 'production',

  plugins: [
      structureTool({
          title: 'Content',
          structure
      }),
      visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
