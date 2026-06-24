import { mkdir, writeFile } from 'node:fs/promises'
import { spawn } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { stitch } from '@google/stitch-sdk'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const outputRoot = path.join(projectRoot, 'stitch')

const PROJECT_ID = '1691030678435386521'

const SCREENS = [
  {
    id: '9aff461685804b3f8ab244c643c7fd76',
    slug: 'landing-page',
    title: 'FINAL - Project Pulse | Landing Page',
  },
  {
    id: '1d7e0f1e2e654dc891ffd9e99cd47951',
    slug: 'news-archive',
    title: 'FINAL - Project Pulse | News Archive',
  },
  {
    id: '26300f4276ed40d7a1347881b3d2232a',
    slug: 'example-blog',
    title: 'FINAL - Project Pulse | Example Blog',
  },
]

function curlDownload(url, dest) {
  return new Promise((resolve, reject) => {
    const curlBin = process.platform === 'win32' ? 'curl.exe' : 'curl'
    const child = spawn(curlBin, ['-L', '-sS', '-o', dest, url], {
      stdio: ['ignore', 'pipe', 'pipe'],
    })

    let stderr = ''
    child.stderr.on('data', (chunk) => {
      stderr += chunk
    })

    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(stderr.trim() || `curl exited with code ${code}`))
    })
  })
}

async function downloadScreen(project, screenMeta) {
  const screen = await project.getScreen(screenMeta.id)
  const htmlUrl = await screen.getHtml()
  const imageUrl = await screen.getImage()

  if (!htmlUrl) throw new Error(`No HTML URL for ${screenMeta.title}`)
  if (!imageUrl) throw new Error(`No image URL for ${screenMeta.title}`)

  const screenDir = path.join(outputRoot, screenMeta.slug)
  await mkdir(screenDir, { recursive: true })

  const htmlPath = path.join(screenDir, 'code.html')
  const imagePath = path.join(screenDir, 'screen.png')

  await curlDownload(htmlUrl, htmlPath)
  await curlDownload(imageUrl, imagePath)

  await writeFile(
    path.join(screenDir, 'metadata.json'),
    JSON.stringify(
      {
        title: screenMeta.title,
        screenId: screenMeta.id,
        projectId: PROJECT_ID,
        htmlUrl,
        imageUrl,
      },
      null,
      2,
    ),
  )

  return { slug: screenMeta.slug, htmlPath, imagePath, htmlUrl, imageUrl }
}

async function main() {
  if (!process.env.STITCH_API_KEY) {
    throw new Error('STITCH_API_KEY is required')
  }

  const project = stitch.project(PROJECT_ID)
  const results = []

  for (const screenMeta of SCREENS) {
    console.log(`Downloading ${screenMeta.title}...`)
    results.push(await downloadScreen(project, screenMeta))
  }

  console.log(JSON.stringify({ outputRoot, results }, null, 2))
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
