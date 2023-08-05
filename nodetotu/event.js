const emiteEvent=require('events')
const event=new emiteEvent()
event.on('respons',(name,job)=>{
    console.log(`Hello my name is ${name} and i am accually a ${job}  `)
})
event.emit('respons',"bassoma","softwar enginnering")