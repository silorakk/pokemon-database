import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to Pokemon Database!</h1>

        <p className="mt-3 text-2xl">Search for your favourite pokemon!</p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <h3 className="text-2xl font-bold">Bulbasaur &rarr;</h3>

          <h3 className="text-2xl font-bold">Charmander &rarr;</h3>

          <h3 className="text-2xl font-bold">Squirtle &rarr;</h3>

          <h3 className="text-2xl font-bold">Pikachu &rarr;</h3>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t flex-col">
        <h1>Footer</h1>
        <h2>Work in Progress</h2>
      </footer>
    </div>
  );
}
