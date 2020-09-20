import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function getAllSources(subdirectory) {
  const sourcesPath = path.join(process.cwd(), 'sources/', `${subdirectory}/`)
  const files = fs.readdirSync(sourcesPath)

  const sources = files.map((file) => {
    const filename = path.join(sourcesPath, file)
    const id = file.replace(/\.md/, '')

    const fileContents = fs.readFileSync(filename, 'utf-8')
    const matterResult = matter(fileContents)

    if (matterResult.data?.date instanceof Date) {
      matterResult.data.date = matterResult.data.date.toISOString()
    }

    return {
      id,
      ...matterResult.data,
    }
  })

  return sources
}
