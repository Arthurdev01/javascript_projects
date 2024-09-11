const { select, input } = require('@inquirer/prompts')

let meta = {
   value: 'tomar 3L de agua por dia',
   checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async() => {

   const meta = await input({message: "digite sua meta: "})

   if(meta.lenght == 0) {
         console.log('a meta nao pode ser vazia.')
         return
   }

   metas.push(
      { value: meta, checked: false }
   )
}

const start = async () => {

      while(true){
         
         const opcao = await select({
            message: "menu >",
            choices: [
               {
                  name:"cadastrar meta",
                  value: "cadastrar"
               },
               {
                  name: "listar metas",
                  value: "listar"
               },
               {
                  name: "sair",
                  value: "sair"
               }
            ]
         })

         switch(opcao) {
               case "cadastrar":
                  await cadastrarMeta()
                  console.log(metas)
                  break
               case "listar":
                  console.log("vamos listar")
                  break 
               case "sair":
                  console.log("ate a proxima")
                  return
         }

      } 
}

start ()