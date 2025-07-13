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
    console.log(response);
}
Main();