const fs=require('fs')
const path=require('path')

const data={
    "Key":"value"
}

function Problem1(){
    fs.promises.mkdir(path.join(__dirname,'RANDOM_JSON'))
    .then(()=>{
        console.log("Folder created")
        const filePath=path.join(path.join(__dirname,'RANDOM_JSON'),'file1.json')
        fs.promises.writeFile(filePath,JSON.stringify(data))
            .then(()=>{
                console.log("File created")
                fs.promises.unlink(filePath)
                .then(()=>{
                    console.log('File deleted!')
                }).catch(err=>{
                    console.log(err)
                })
            }).catch((err)=>{
                console.log(err)
            })
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports={
    Problem1
}
    
