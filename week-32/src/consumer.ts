import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"]
})

const consumer = kafka.consumer({ groupId: "my-app3" });
// const consumer = kafka.consumer({ groupId: "test-group" });  //in this all have consumer id same
// const consumer = kafka.consumer({ groupId: "test-group" + Math.random()});  //with this consumer id is different so all they are in different groups

// async function main() {
//     await consumer.connect();
//     await consumer.subscribe({
//         topic: "quickstart-events", fromBeginning: true
//     })

//     await consumer.run({
//         eachMessage: async ({ topic, partition, message }) => {
//             console.log({
//                 offset: message.offset,
//                 value: message?.value?.toString(),
//             })
//         },
//     })
// }


// main();

// const run = async () => {
//     //consuming
//     await consumer.connect()
//     await consumer.subscribe({ topic: "quickstart-events", fromBeginning: true })

//     await consumer.run({
//         eachMessage: async ({ topic, partition, message }) => {
//             if (!message.value) {
//                 return;
//             }
//             console.log({
//                 partition,
//                 offset: message.offset,
//                 value: message.value.toString(),

//             })
//         },
//     })
// }
// run().catch(console.error)

const run = async () => {
    //consuming
    await consumer.connect()
    await consumer.subscribe({ topic: "payment-done", fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            if (!message.value) {
                return;
            }
            console.log({
                partition,
                offset: message.offset,
                value: message.value.toString(),

            })
        },
    })
}
run().catch(console.error)