import LogoStarWars from 'components/LogoStarWars';
import Films from 'containers/films';

export default function FilmsPage() {
  return (
    <div className="flex justif-center flex-col text-center">
      <LogoStarWars className="mt-8">May the Force be with you</LogoStarWars>
      <Films />
    </div>
  );
}
