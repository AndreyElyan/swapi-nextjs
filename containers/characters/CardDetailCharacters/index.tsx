import { useMachine } from '@xstate/react';
import Button from 'components/Button';

import Loader from 'components/Loader';
import { getCharactersByPage } from 'utils/api/characters';

import { charactersMachine } from 'utils/machines/characters';
import { EVENTS } from 'utils/machines/characters/enums';

const CardDetailCharacters: React.FC = () => {
  const [state, dispatch] = useMachine(charactersMachine);

  const { characters, nextPageUrl, previousPageUrl } = state.context;

  const nexStep = async () => {
    try {
      const nextPageId = nextPageUrl?.replace(
        'http://swapi.dev/api/people/?page=',
        ''
      );
      const { data } = await getCharactersByPage(nextPageId);
      dispatch({
        type: EVENTS.NEXT_STEP,
        characters: data.results,
        nextPageUrl: data.next,
        previousPageUrl: data.previous
      });
    } catch (err) {
      console.log(err);
    }
  };

  const previousStep = async () => {
    try {
      const previousPageId = previousPageUrl?.replace(
        'http://swapi.dev/api/people/?page=',
        ''
      );
      console.log(previousPageId);
      const { data } = await getCharactersByPage(previousPageId);
      dispatch({
        type: EVENTS.PREVIOUS_STEP,
        characters: data.results,
        previousPageUrl: data.previous,
        nextPageUrl: data.next
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="grid  grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4 mt-12 w-full ">
        {!characters ? (
          <div className="flex justify-center items-center w-full h-full">
            <Loader size="100px" />
          </div>
        ) : null}
        {characters?.map((result, index) => (
          <div
            className="grid grid-cols-2 mt-28 shadow-xl bg-gray-200 rounded-lg rounded-br-3xl"
            key={index}
          >
            <div className="flex flex-col items-center">
              <h1 className="text-xl text-gray-600  font-bold">Name:</h1>
              <h2 className="mt-4 font-semibold mb-4 sm:text-sm text-xs">
                {result.name}
              </h2>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-xl text-gray-600 font-bold">Height:</h1>
              <h2 className="mt-4 font-semibold mb-4 sm:text-sm text-xs">
                {result.height}
              </h2>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-xl text-gray-600 font-bold">Mass:</h1>
              <h2 className="mt-4 font-semibold mb-4 sm:text-sm text-xs">
                {result.mass}
              </h2>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-xl text-gray-600 font-bold">Skin:</h1>
              <h2 className="mt-4 font-semibold mb-4 sm:text-sm text-xs">
                {result.skin_color}
              </h2>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-xl text-gray-600 font-bold">Eyes:</h1>
              <h2 className="mt-4 font-semibold mb-4 sm:text-sm text-xs">
                {result.eye_color}
              </h2>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-xl text-gray-600 font-bold">Gender:</h1>
              <h2 className="mt-4 font-semibold mb-4 sm:text-sm text-xs">
                {result.gender}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-between w-full  my-12">
        <Button onClick={previousStep}>previous</Button>
        <Button onClick={nexStep}>next</Button>
      </div>
    </>
  );
};

export default CardDetailCharacters;
