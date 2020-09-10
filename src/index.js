const { CnabToJsons } = require('jsons-to-cnab')
const fs = require('fs')
const path = require('path')

const { itauLayout240 } = require('./layout')

//caminho onde se encontro o arquivo cnab
const caminho = path.join(__dirname, '/cnab/arquivo.ret')

//leitura do arquivo cnab e conversão para base64
const arquivoCnab = fs.readFileSync(caminho, 'base64')

const cnabToJson = new CnabToJsons(arquivoCnab)

const definitions = [
  {
    "positions":
      [
        1, 4, 8, 9, 14, 15, 18,
        21, 24, 44, 74, 94, 102,
        105, 113, 120, 135, 150,
        155, 163, 178, 198, 204,
        218, 220, 225, 230, 231
      ],
    "values":
      ["", "", "", "", "", "", "",
        "", "", "", "", "", "", "",
        "", "", "", "", "", "", "",
        "", "", "", "", "", "", ""
      ],
    "map": itauLayout240
  }
]

cnabToJson.fit(definitions) //realizando as combinações

const jsonData = cnabToJson.convert() //converte para json

console.log(jsonData)