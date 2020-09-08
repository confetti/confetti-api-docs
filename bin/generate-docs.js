#!/usr/bin/env node

const fs = require('fs')
const _ = require('lodash')
const Confetti = require('confetti')

const code = require('./code-examples')

const findWorkspace = (model) => {
  const { name, endpoint, key } = model
  return `

## Get your ${key}
\`\`\`javascript
${code[endpoint].find.javascript()}
\`\`\`
\`\`\`javascript
${JSON.stringify(model.sample.single.formatted, null, 1)}
\`\`\`

\`\`\`shell
${code[endpoint].find.shell()}
\`\`\`
\`\`\`shell
${JSON.stringify(model.sample.single.raw, null, 1)}
\`\`\`

This endpoint retrieves your ${key}.

### HTTP Request

\`GET https://api.confetti.events/${endpoint}/<ID>\`
  `
}

const findOneExample = (model) => {
  const { name, endpoint, key } = model
  return `
## Get a specific ${key}
\`\`\`javascript
${code[endpoint].find.javascript()}
\`\`\`
\`\`\`javascript
${JSON.stringify(model.sample.single.formatted, null, 1)}
\`\`\`

\`\`\`shell
${code[endpoint].find.shell()}
\`\`\`
\`\`\`shell
${JSON.stringify(model.sample.single.raw, null, 1)}
\`\`\`

This endpoint retrieves a specific ${key}.

### HTTP Request
\`GET https://api.confetti.events/${endpoint}/<ID>\`

### URL Parameters
Parameter | Description
--------- | -----------
ID | The ID of the record to retrieve
  `
}

const findAllExample = (model, { namePlural }) => {
  const { endpoint } = model
  let str = ''
  str += `## Get all ${namePlural}\n`
  str += `
  \`\`\`javascript
${code[endpoint].findAll.javascript()}
\`\`\`
\`\`\`javascript
${JSON.stringify(model.sample.multiple.formatted, null, 1)}
\`\`\`


\`\`\`shell
${code[endpoint].findAll.shell()}
\`\`\`
\`\`\`shell
${JSON.stringify(model.sample.multiple.raw, null, 1)}
\`\`\`
`
  str += `This endoint retreives all ${namePlural}.\n`
  str += `### HTTP Request\n`
  str += `\`GET https://api.confetti.events/${endpoint}\`\n`

  if (model.filters && Object.keys(model.filters).length) {
    str += `
### URL Parameters

Parameter | Default | Values
- | - | - | -
${queryParametersTable(model.filters)}
`
  }
  str += `
Page | Default | Description
- | - | -
limit | 1000 | Maximum number of results
offset | 0 | Skip X results
`
  return str
}

const queryValues = (filter) => {
  if (_.includes(['string', 'boolean', 'number'], filter.type)) {
    return filter.type
  }
  const values = filter.values.map((value) => {
    return value.value
  })
  return values.join(', ')
}

const queryDefaultValue = (filter) => {
  if (_.isArray(filter.default)) {
    return filter.default.join(', ')
  } else {
    return filter.default
  }
}

const queryParametersTable = (filters) => {
  let str = ''
  for (const filterName in filters) {
    const filter = filters[filterName]
    str += filterName
    if (filter.required) str += '*'
    str += ` | ${queryDefaultValue(filter)}`
    str += ` | ${queryValues(filter)} \n`
  }
  return str
}

;['event', 'payment', 'ticket', 'webhook', 'workspace'].forEach((modelName) => {
  const model = Confetti.models[modelName]
  const { endpoint, key } = model
  const namePlural = endpoint

  const path = `source/includes/_${model.endpoint}.md`
  if (fs.existsSync(path)) fs.unlinkSync(path)

  const stream = fs.createWriteStream(path)
  stream.once('open', function (fd) {
    stream.write(`# ${_.capitalize(namePlural)}\n`)
    if (key == 'workspace') {
      stream.write(`${findWorkspace(model)}\n`)
    } else {
      stream.write(`${findAllExample(model, { namePlural })}\n`)
      stream.write(`${findOneExample(model)}\n`)
    }
    stream.end()
  })
})
