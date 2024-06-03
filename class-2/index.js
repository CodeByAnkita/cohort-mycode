// // const express = require("express");
// // const app = express();
// // function sum(n) {
// //   let ans = 0;
// //   for (let i = 1; i <= n; i++) {
// //     ans = ans + i;
// //   }
// //   return ans;
// // }

// // app.get("/", function (req, res) {
// //   const n = req.query.n;
// //   const ans = sum(n);
// //   res.send("hi, your ans is" + ans);
// // });
// //after in localhost:3000/?n=100 like yoy can put query ?this questionmark is use for query parameter
// // app.listen(3000);

// const express = require("express");
// const app = express();

// const users = [
//   {
//     name: "John",
//     kidneys: [
//       {
//         healthy: false,
//       },
//     ],
//   },
// ];

// app.use(express.json());

// app.get("/", function (req, res) {
//   const johnKidneys = users[0].kidneys;
//   const numberOfKidneys = johnKidneys.length;
//   let numberOfHealthyKidneys = 0;
//   for (let i = 0; i < johnKidneys.length; i++) {
//     if (johnKidneys[i].healthy) {
//       numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
//     }
//   }
//   const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
//   res.json({
//     numberOfKidneys,
//     numberOfHealthyKidneys,
//     numberOfUnhealthyKidneys,
//   });
// });

// app.post("/", function (req, res) {
//   const isHealthy = req.body.isHealthy;
//   users[0].kidneys.push({
//     healthy: isHealthy,
//   });
//   res.json({
//     msg: "Done!",
//   });
// });

// // 411
// app.put("/", function (req, res) {
//   for (let i = 0; i < users[0].kidneys.length; i++) {
//     users[0].kidneys[i].healthy = true;
//   }
//   res.json({});
// });

// // removing all the unhealhty kidneys
// app.delete("/", function (req, res) {
//   if (isThereAtleastOneUnhealthyKidney()) {
//     const newKidneys = [];
//     for (let i = 0; i < users[0].kidneys.length; i++) {
//       if (users[0].kidneys[i].healthy) {
//         newKidneys.push({
//           healthy: true,
//         });
//       }
//     }
//     users[0].kidneys = newKidneys;
//     res.json({ msg: "done" });
//   } else {
//     res.status(411).json({
//       msg: "You have no bad kidneys",
//     });
//   }
// });

// function isThereAtleastOneUnhealthyKidney() {
//   let atleastOneUnhealthyKidney = false;
//   for (let i = 0; i < users[0].kidneys.length; i++) {
//     if (!users[0].kidneys[i].healthy) {
//       atleastOneUnhealthyKidney = true;
//     }
//   }
//   return atleastOneUnhealthyKidney;
// }
// app.listen(3000);

const express = require("express");

const z = require("zod");

const app = express();

app.use(express.json());

const kidneysInput = z.literal("1").or(z.literal("2"));

app.post("/health-checkup", function (req, res) {
  // do something with kidney here
  const kidneyId = req.body.kidneyId;
  const validation = kidneysInput.safeParse(kidneyId);
  if (!validation.success) {
    res.send("Incorrect input");
    return;
  }
  res.send("Your kidney id is" + kidneyId);
});
app.listen(3000);
