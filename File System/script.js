const fs = require("fs");

// Directory create
// fs.mkdir('hello', (err) => {
//     if (err) console.log(err);
//     else console.log("Created");
// })

// File create
// fs.writeFile("./hello/hello.txt", "Hello Node.js!", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("File created successfully!");
// });

// Read File
// fs.readFile("./hello/hello.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });

// Read Directory
// fs.readdir("hello", { withFileTypes: true }, (err, files) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(files);
// });

// Remove File
// fs.unlink("./hello/abc.txt", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("File deleted successfully!");
// });

// Remove Directory
fs.rm("./hello/Abc", { recursive: true }, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Directory removed");
});