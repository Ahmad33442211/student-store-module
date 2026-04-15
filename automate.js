const { exec } = require("child_process");

exec("npm.cmd test", (error, stdout, stderr) => {
  const output = `${stdout}\n${stderr}`;

  if (output.includes("PASS")) {
    console.log("ahmadabukhaterr95@outlook.com - getAll to show all product - 200 - PASSED");
  } else {
    console.log("ahmadabukhaterr95@outlook.com - getAll to show all product - 500 - FAILED");
  }
});