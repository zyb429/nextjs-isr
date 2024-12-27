import Link from 'next/link';

export default function Header({ font }: { font: string }) {
  return (
    <header className="py-2 bg-gray-952 ">
      <div className="max-w-[100rem] px-12 mx-auto flex justify-between">
        <Link href="/">
          <h1 className={`uppercase text-yellow-500 hover:text-yellow-600 text-center py-2 ${font}`}>
            Zybko.shop
          </h1>
        </Link>
        <Link
          href="/products/upload"
          className="uppercase text-neutral-300 text-xl py-2 hover:text-neutral-500"
        >
          Создать товар {'>'}
        </Link>
      </div>
    </header>
  );
}
