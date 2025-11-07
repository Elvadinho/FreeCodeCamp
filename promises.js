// fetch("https://api.scrimba.com/dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .catch((data) => console.log(data))
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => console.log("The operation completed."));

async function challenge() {
  try {
    const response = await fetch(
      "https://apis.scrimba.com/dog.ceo/api/breeds/image/random"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("The operation completed.");
  }
}

challenge();
