// if (err) {
//             console.log("Error writing file");
//             return;
//         }
//         console.log("File written successfully");
//     });
// }
// writeFile("./async.txt", "Async save");
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16
// function exists(p) {
//     return fs.existsSync(p);
// }
// console.log(exists("./notes.txt"));

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 17
// function Os() {
//     return {
//         Platform: os.platform(),
//         Arch: os.arch()
//     };
// }
// console.log(Os());