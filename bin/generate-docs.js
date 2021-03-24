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
\`\`\`json
${JSON.stringify(model.sample.single.formatted, null, 1)}
\`\`\`

\`\`\`shell
${code[endpoint].find.shell()}
\`\`\`
\`\`\`json
${JSON.stringify(model.sample.single.raw, null, 1)}
\`\`\`

This endpoint retrieves your ${key}.
`
}

const findOneExample = (model) => {
  const { name, endpoint, key } = model
  str = `
## Get a specific ${key}
\`\`\`javascript
${code[endpoint].find.javascript()}
\`\`\`
\`\`\`json
${JSON.stringify(model.sample.single.formatted, null, 1)}
\`\`\`

\`\`\`shell
${code[endpoint].find.shell()}
\`\`\`
\`\`\`json
${JSON.stringify(model.sample.single.raw, null, 1)}
\`\`\`

This endpoint retrieves a specific ${key}.

`

  if (model.includes) {
    str += `
URL Parameter | Default | Values/Description
- | - | - | - 
`
    str += `include |  | ` + model.includes.map((i) => '`' + i + '`').join(', ')
  }
  return str
}

const findAllExample = (model, { namePlural }) => {
  const { endpoint } = model
  let str = ''
  str += `## Get all ${namePlural}\n`
  str += `
  \`\`\`javascript
${code[endpoint].findAll.javascript()}
\`\`\`
\`\`\`json
${JSON.stringify(model.sample.multiple.formatted, null, 1)}
\`\`\`


\`\`\`shell
${code[endpoint].findAll.shell()}
\`\`\`
\`\`\`json
${JSON.stringify(model.sample.multiple.raw, null, 1)}
\`\`\`
`
  str += `This endoint retreives all ${namePlural}.\n`

  str += `
URL Parameter | Default | Values/Description
- | - | - | -`
  if (model.filters && Object.keys(model.filters).length) {
    str += queryParametersTable(model.filters)
  }
  str += `page[limit] | 1000 | Maximum number of results
page[offset] | 0 | Skip X results
`
  if (model.includes) {
    str += `include |  | ` + model.includes.map((i) => '`' + i + '`').join(', ')
  }
  return str
}

const queryValues = (filter) => {
  if (_.includes(['string', 'boolean', 'number'], filter.type)) {
    return filter.type
  }
  const values = filter.values.map((value) => {
    return '`' + value.value + '`'
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
    str += `filter[${filterName}]`
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
