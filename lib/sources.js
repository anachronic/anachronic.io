import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

export async function getAllSources(subdirectory) {
  const sourcesPath = path.join(process.cwd(), 'sources/', `${subdirectory}/`)
  const files = fs.readdirSync(sourcesPath)

  const sources = await Promise.all(
    files.map(async (file) => {
      const filename = path.join(sourcesPath, file)
      const id = file.replace(/\.md/, '')

      const fileContents = fs.readFileSync(filename, 'utf-8')
      const matterResult = matter(fileContents)

      const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

      if (matterResult.data?.date instanceof Date) {
        matterResult.data.date = matterResult.data.date.toISOString()
      }

      return {
        id,
        content: processedContent.toString(),
        ...matterResult.data,
      }
    })
  )

  return sources
}
