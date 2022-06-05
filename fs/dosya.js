const fs = require('fs')

const write = (file, newData) => {
    fs.writeFile('./' + file, newData, 'utf8', (err) => {
        if (err)
            return console.log(err)
        else
            console.log('Dosya oluşturuldu')
    })
}

const read = (file) => {
    fs.readFile('./' + file, 'utf-8', (err, data) => {
        if (err)
            console.log(err)
        else
            console.log(JSON.stringify(data))
    })
}


const remove = (file) => {
    fs.unlink('./' + file, (err) => {
        if (err)
            console.log(err)
        else
            console.log('Dosya Silindi')
    })
}

const fileName = 'employees.json'
const data = '{ "name": "Employee 1 Name", "salary": 2000 }'

write(fileName, data)
read(fileName)
remove(fileName)