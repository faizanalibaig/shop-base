import {clsx} from 'clsx';
import Color from '../data/color.json';

import Header from '@/components/HeaderSection/DesktopHeader/Header';

export default function Home() {
  return (
    <div
      style={{backgroundColor: Color['background-color']}}
      className={clsx(`h-[2000px] w-full`)}
    >
      {/*<h1 className={clsx("text-2xl font-semibold font-newsreader")}>Shop - Base</h1>*/}
      <Header />
    </div>
  );
}
