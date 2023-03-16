# Call OpenAI audio transcriptions API in Deno

```ts
import { Application } from 'https://deno.land/x/oak/mod.ts'
import { oakCors } from 'https://deno.land/x/cors/mod.ts'

const app = new Application()
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')

app.use(
  oakCors({
    origin: true,
  })
)

app.use(async (ctx) => {
  const path = ctx.request.url.pathname
  if (path === '/upload') {
    const body = await ctx.request.body({ type: 'form-data' })
    const data = await body.value.read({
      maxSize: 25000000,
      maxFileSize: 25000000,
    })
    const file = data?.files?.[0]
    if (!file) {
      ctx.response.status = 400
      ctx.response.body = 'No audio file provided'
      return
    }
    const formData = new FormData()
    if (file.content) {
      const blob = new Blob([file.content])
      formData.append('file', blob, file.originalName)
    }
    formData.append('model', 'whisper-1')
    const response = await fetch(
      'https://api.openai.com/v1/audio/transcriptions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: formData,
      }
    )
    const transcription = await response.json()
    ctx.response.body = transcription.text
  }

  if (ctx.request.method === 'GET') {
    ctx.response.body = 'OK'
  }
})

app.listen({ port: 8082 })
```
