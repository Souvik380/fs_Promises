const fs=require('fs')
const path=require('path')
const filePath=path.join(__dirname,'lipsum.txt')

function Problem2(){
    fs.promises.readFile(filePath,"utf-8").then((data)=>{
        console.log(data)
        fs.promises.mkdir(path.join(__dirname,'filenames.txt')).then(()=>{
            fs.promises.writeFile(path.join(path.join(__dirname,'filenames.txt'),'Capital.txt'),data.toUpperCase()).then(()=>{
                console.log("Read the file")
                fs.promises.readFile(path.join(path.join(__dirname,'filenames.txt'),'CAPITAL.txt'),"utf-8").then((data2)=>{
                    fs.promises.writeFile(path.join(path.join(__dirname,'filenames.txt'),'Lower.txt'),data.toLowerCase().split('.').join("#$")).then(()=>{
                        console.log("Upper case data converted to lower case")
                        fs.promises.readFile(path.join(path.join(__dirname,'filenames.txt'),'Lower.txt'),"utf-8").then((data3)=>{
                            fs.promises.writeFile(path.join(path.join(__dirname,'filenames.txt'),'Sorted.txt'),data3.split('#$').sort().join(' ')).then(()=>{
                                console.log("data sorted")
                                
                                const dir=path.join(path.join(__dirname,'filenames.txt'),'/')
                                fs.promises.readdir(dir).then((files)=>{
                                    files.forEach((file)=>{
                                        fs.promises.unlink(path.join(dir,file)).then(()=>{
                                            console.log(`${file}`+"deleted!")
                                        }).catch(err=>console.log(err))
                                    })
                                }).catch(err=>console.log(err))
                            }).catch(err=>console.log(err))
                        }).catch(err=>console.log(err))
                    }).catch(err=>console.log(err))
                }).catch(err=>console.log(err))
            }).catch(err=>console.log(err))
        }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
}

Problem2()

module.exports={
    Problem2
}