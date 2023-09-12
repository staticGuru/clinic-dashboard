import axios from "axios";

export const Auth = {
  async signIn(payload: any) {
    const article = { title: "React POST Request Example" };
    const headers = {
      Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar",
    };
    const response = await axios
      .post("https://reqres.in/api/articles", article, { headers })
      .then((response) => console.log({ articleId: response.data.id }));
  },
};
