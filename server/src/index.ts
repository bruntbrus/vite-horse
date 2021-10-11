#!/usr/bin/env ts-node

import express from 'express'
import { createDatabase, getEntityByName } from './db'

const app = express()
const port = 3000
const db = createDatabase()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('*', (req, res, next) => {
  console.info('Request:', req.url)
  next()
})

app.get('/:entity/:id', async (req, res) => {
  const entityName = toEntityName(req.params.entity)
  const entityId = parseInt(req.params.id)
  // @ts-ignore
  const Entity = getEntityByName(entityName)

  let repo
  let entity
  let error

  if (Entity) {
    repo = await db.getRepository(Entity)

    try {
      entity = await repo.findOne({
        where: { id: entityId },
      })
    } catch (err) {
      error = err
      console.warn(err)
    }
  } else {
    error = new Error(`Entity '${entityName}' not found.`)
  }

  res.json(makeResponse({
    type: repo?.metadata.name || null,
    entity: entity || null,
  }, error))
})

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`)
})

function makeResponse(data?: Record<string, unknown>, err?: unknown) {
  return {
    data: data || null,
    // @ts-ignore
    error: err ? String(typeof err === 'object' ? err.message : err) : null
  }
}

function toEntityName(urlName: string) {
  return urlName[0].toUpperCase() + urlName.slice(1).replace(/_([a-z])/gi, (_, char: string) => char.toUpperCase())
}
