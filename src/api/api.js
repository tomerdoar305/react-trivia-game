//TODO - to change to asinc await. To take care on other browsers...

export function getQuestions() {
  return new Promise((resolve, reject) => {
    const req = new Request(
      `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`,
      {
        method: "GET",
      }
    );
    fetch(req)
      .then((res) => {
        resolve(res.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}
