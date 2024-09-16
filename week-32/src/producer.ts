import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"]
})

const producer = kafka.producer();

// async function main() {
//     await producer.connect();
//     await producer.send({
//         topic: "quickstart-events",
//         messages: [{
//             value: "hi there"
//         }]
//     });
// }


// main();

// const run = async () => {
//     //producing
//     await producer.connect()
//     await producer.send({
//         topic: "quickstart-events",
//         messages: [{
//             value: "hi there from kafka process!",
//         }],
//     })
// }
// run().catch(console.error);

const run = async () => {
    //producing
    await producer.connect()
    await producer.send({
        topic: "payment-done",
        messages: [{
            value: "hi there from kafka process!",
        }],
    })
}
run().catch(console.error);