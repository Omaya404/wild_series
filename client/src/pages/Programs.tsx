import { useEffect, useState } from "react";

type Program = {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
};

function Programs() {
  const [boitePrograms, setBoitePrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((programs) => setBoitePrograms(programs));
  }, []);

  return boitePrograms.map((unProgramRecup) => (
    <div key={unProgramRecup.id}>
      <h1>{unProgramRecup.title}</h1>
      {/* biome-ignore lint/a11y/useAltText: <explanation> */}
      <img src={unProgramRecup.poster} />
      <h2>{unProgramRecup.synopsis}</h2>
    </div>
  ));
}

export default Programs;
