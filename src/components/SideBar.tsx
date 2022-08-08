import { GenreResponseProps } from "../App";
import { Button } from "./Button";

export function SideBar({
  genres,
  selectedGenreId,
  handleClickButton,
}: {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre: any) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
