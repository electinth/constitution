const data = Deno.readTextFile("../data/example.json");
data.then((response) => {
    console.log(response);
});