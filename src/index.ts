import  {PrismaClient}  from "@prisma/client";
const prisma =new PrismaClient();
async function Main(){
  const response=  await prisma.user.findFirst({
        where:{
            id:1
        },
        select:{
            username:true
        }
        
    })
    await prisma.todo.create({
        data:{
            title:"Read the Docs",
            description:"Deep dive into prisma ",
            userId:1

        }
    }) 
    console.log(response);
}
Main();