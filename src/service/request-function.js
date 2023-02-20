import axios from "axios";

const api_key = "0db62ecbfbd912a6e452af52373f9031";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGI2MmVjYmZiZDkxMmE2ZTQ1MmFmNTIzNzNmOTAzMSIsInN1YiI6IjYwYmQxMmY5MThiNzUxMDA0MjhhNWM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1eqp95rqD7ktZf_qfAwkQnyjona-hLeXR-q1_SbZj4k";

export const getVideo = async ({ id }) => {
  let aux = [];
  try {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        aux = response.data.results;
      });
    return aux;
  } catch (error) {
    console.log(error);
  }
};
