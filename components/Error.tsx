import Image from "next/image";

export default function Error() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center py-8 md:py-32 px-8">
      <Image
        layout="fill"
        src="/images/product-pages/on-your-team.png"
        className="transform -translate-x-6 md:max-h-96 max-h-72 mr-4 mb-8"
      />

      <div className="block text-center text-black">
        <h2 className="text-9xl font-black mb-4">404</h2>
        <p className="md:text-xl font-semibold tracking-tight w-60">
          The page you are looking for does not exist
        </p>
      </div>
    </main>
  );
}
