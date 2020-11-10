export function getQuestions() {
  return new Promise((resolve, reject) => {
    fetch(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`)
      .then((res) => {
        resolve(res.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function getQuestionsAsyncAwait() {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
