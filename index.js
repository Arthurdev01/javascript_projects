const { select, input, checkbox } = require('@inquirer/prompts')

let meta = {
   value: 'tomar 3L de agua por dia',
   checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {

   const meta = await input({message: "digite sua meta: "})

   if(meta.lenght == 0) {
         console.log('a meta nao pode ser vazia.')
         return
   }

   metas.push(
      { value: meta, checked: false }
   )
}

const listarMetas = async () => {
      const respostas = await checkbox({
         message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para finalizar essa etapa",
         choices:[...metas],
         instructions: false,
      })

      if(respostas.length == 0){
         console.log("nenhuma meta selecionada")
         return
      }

      metas.forEach((m)=>{
         m.checked = false
      })



      respostas.forEach((resposta) => {
         const meta = metas.find((m)=>{
            return m.value == resposta 
         })

         meta.checked = true

      })

      console.log("meta(s) marcadas como concluida(s)")
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
                  await listarMetas()
                  console.log("vamos listar")
                  break 
               case "sair":
                  console.log("ate a proxima")
                  return
         }

      } 
}

start ()