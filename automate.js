const { exec } = require("child_process");

exec("npm.cmd test -- --runInBand", (error, stdout, stderr) => {
  if (stdout) {
    const lines = stdout.split("\n");
    const filtered = lines.filter(
      (line) =>
        line.includes("@outlook.com") &&
        line.includes("getAll to show all product") &&
        (line.includes("PASSED") || line.includes("FAILED"))
    );

    if (filtered.length > 0) {
      console.log(filtered.join("\n"));
    } else {
      console.log("No formatted test output found.");
    }
  }

  if (stderr) {
    console.error(stderr);
  }

  if (error) {
    process.exit(1);
  }
});