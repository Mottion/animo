import { Container, Genre } from './styles';

interface GenresListProps {
  genresListClassName: string;
}

function GenresList({genresListClassName}: GenresListProps) {
  const genres = ['Açao', 'Aventura', 'Cars', 'Comedy', 'Antigos', 'Demonios', 'Misterio', 'Drama', 'Ecchi', 'Fantasia', 'Jogo', 'Hentai', 'Historia', 'Terror', 'Infantil', 'Magia', 'Artes Marciais', 'Mecha', 'Musical', 'Parodia', 'Samurai', 'Romance', 'Escolar', 'Cientifico', 'Shoujo', 'Shoujo Ai', 'Shounen', 'Shounen Ai', 'Espaço', 'Esportes', 'Super Poderes', 'Vampiros', 'Yaoi', 'Yuri', 'Harem', 'Slice Of Life', 'Sobrenatural', 'Militar', 'Policial', 'Psicologico', 'Thriller', 'Seinen', 'Josei'];
  return (
    <Container className={genresListClassName}>
      {genres.map((item, index) => (
        <Genre href={`/generos/anime/${index + 1}`} key={index + 1}>{item}</Genre>
      ))}
    </Container>
  );
};

export default GenresList;
