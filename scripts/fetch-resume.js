const fs = require("fs")
const path = require("path")
const { parse } = require("node-html-parser")

const RESUME_RELEASE_URL =
  "https://github.com/JSimoni42/resume/releases/latest/download/resume.html"

const OUTPUT_PATH = path.join(
  __dirname,
  "..",
  "src",
  "generated",
  "resume.ts"
)

async function fetchResumeHtml() {
  const response = await fetch(RESUME_RELEASE_URL)

  if (!response.ok) {
    throw new Error(
      `Failed to fetch resume.html: ${response.status} ${response.statusText}`
    )
  }

  const html = await response.text()
  const root = parse(html)
  const content = root.querySelector("#content")

  if (!content) {
    throw new Error("Fetched resume.html has no #content element")
  }

  return content.outerHTML
}

async function main() {
  let resumeHtml

  try {
    resumeHtml = await fetchResumeHtml()
  } catch (error) {
    if (fs.existsSync(OUTPUT_PATH)) {
      console.warn(
        `Warning: could not fetch latest resume.html (${error.message}). Keeping previously generated ${OUTPUT_PATH}.`
      )
      return
    }

    throw error
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
  fs.writeFileSync(
    OUTPUT_PATH,
    `export const resumeHtml = ${JSON.stringify(resumeHtml)}\n`
  )
  console.log(`Wrote ${OUTPUT_PATH}`)
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
