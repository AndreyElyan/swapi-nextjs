import LogoStarWars from 'components/LogoStarWars';
import Films from 'containers/films';

export default function FilmsPage() {
  return (
    <div className=" container mx-auto px-4 flex justif-center flex-col text-center">
      <LogoStarWars className="mt-8">May the Force be with you</LogoStarWars>
      <Films />
    </div>
  );
}
