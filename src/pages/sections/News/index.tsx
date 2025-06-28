import NewsCard from "@/pages/parts/NewsItem";

const SectionNews = () => {
     return (
          <section className="bg-purple-200 w-screen p-18 md:p-32" id="news">
               <h2 className="font-semibold text-4xl">Berita terkini</h2>
               <div className="flex flex-wrap gap-3 mt-10 mx-auto md:pl-14">
                    {Array.from({ length: 5 }).map((_, index) => (
                         <NewsCard key={index} />
                    ))}
               </div>
          </section>
     );
};

export default SectionNews;
