function getData() {
  return new Promise((resolve, reject) => {
    fetch("https://example.com/data")
      .then((res) => {
        resolve(res.json()); // returns a promise inside promise
      })
      .catch((err) => {
        console.log("error"); // silent failure
      });
  });
}
