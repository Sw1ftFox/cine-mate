import { app } from "@components/app/App";

import "@styles/roots.css";
import "@styles/global.css";
import "@styles/header.css";
import "@styles/components/search.css";
import "@styles/main.css";
import "@styles/components/moviesList.css";
import "@styles/components/movie.css";
import "@styles/components/movieDetails.css";
import "@styles/components/pagination.css";
import "@styles/media.css";

document.addEventListener("DOMContentLoaded", () => {
  app.init();
});
